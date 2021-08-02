import { BigInt, BigDecimal, log } from "@graphprotocol/graph-ts";
import {
  TournamentV1,
  BetScore,
  Claim,
  ClaimTreasury,
  DeadlineUpdated,
  MatchCompleted,
  MatchCreated,
  MatchForfeited,
  Paused,
  Refund,
  RewardRateUpdated,
  MinimumBetAmountUpdated,
  Unpaused,
} from "../generated/TournamentV1/TournamentV1";
import { Tournament, Match, Bet, Position } from "../generated/schema";

const CREATED = "Created",
  COMPLETED = "Completed",
  FORFEITED = "Forfeited";

const ZERO_BI = BigInt.fromI32(0);
const ONE_BI = BigInt.fromI32(1);
const ZERO_BD = BigDecimal.fromString("0");
const EIGHTEEN_BD = BigDecimal.fromString("1e18");

let BASE_REWARD_RATE = BigInt.fromI32(90);
let BASE_MIN_BET_AMOUNT = BigDecimal.fromString("0.01");

const divDecimalBD = (val: BigInt): BigDecimal => val.divDecimal(EIGHTEEN_BD);

export function handleMatchCreated(event: MatchCreated): void {
  const match = new Match(event.params.matchId.toHex());
  match.umpire = event.params.umpire;
  match.uri = event.params.uri;
  match.minScore = event.params.minScore;
  match.scoreMultiple = event.params.scoreMultiple;
  match.deadline = event.params.deadline;
  match.rewardRate = BigInt.fromI32(event.params.rewardRate);
  match.totalBets = ZERO_BI;
  match.totalAmount = ZERO_BD;
  match.rewardAmount = ZERO_BD;
  match.treasuryAmount = ZERO_BD;
  match.stage = CREATED;
  match.save();
}

export function handleDeadlineUpdated(event: DeadlineUpdated): void {
  const match = Match.load(event.params.matchId.toHex());
  if (match === null) {
    log.error(
      "Tried to update deadline without an existing match (match id : {})",
      [event.params.matchId.toString()]
    );
  }
  match.deadline = event.params.deadline;
  match.save();
}

export function handleMatchForfeited(event: MatchForfeited): void {
  const match = new Match(event.params.matchId.toHex());
  match.stage = FORFEITED;
  match.save();
}

export function handleMatchCompleted(event: MatchCompleted): void {
  const match = Match.load(event.params.matchId.toHex());
  if (match === null) {
    log.error("Tried to end match without an existing match (match id : {})", [
      event.params.matchId.toString(),
    ]);
  }
  match.umpire = event.params.umpire;
  match.winningScore = event.params.winningScore;
  match.rewardAmount = divDecimalBD(event.params.rewardAmount);
  match.treasuryAmount = divDecimalBD(event.params.treasuryAmount);
  /** Syncing totalAmount from match end event **/
  match.totalAmount = match.rewardAmount.plus(match.treasuryAmount);
  match.stage = COMPLETED;
  match.save();

  const tournament = getTournament();
  tournament.rewardAmount = tournament.rewardAmount.plus(match.rewardAmount);
  tournament.treasuryAmount = tournament.treasuryAmount.plus(
    match.treasuryAmount
  );
  tournament.totalAmount = tournament.totalAmount.plus(match.totalAmount);
  tournament.totalBets = tournament.totalBets.plus(match.totalBets);
  tournament.save();
}

export function handleBetScore(event: BetScore): void {
  const betId =
    event.params.sender.toHex() + "-" + event.params.matchId.toHex();
  const bet = new Bet(betId);
  bet.match = event.params.matchId.toHex();
  bet.sender = event.params.sender;
  bet.score = event.params.score;
  bet.amount = divDecimalBD(event.params.amount);
  bet.claimed = false;
  bet.refunded = false;

  bet.save();

  const positionId =
    event.params.matchId.toHex() + "-" + event.params.score.toHex();
  let position = Position.load(positionId);
  if (position == null) {
    position = new Position(positionId);
    position.match = event.params.matchId.toHex();
    position.score = event.params.score;
    position.bets = ZERO_BI;
    position.amount = ZERO_BD;
  }
  position.bets = position.bets.plus(ONE_BI);
  position.amount = position.amount.plus(divDecimalBD(event.params.amount));
  position.save();

  let match = Match.load(event.params.matchId.toHex());
  match.totalBets = match.totalBets.plus(ONE_BI);

  //Updating for real time data. Will be recalculated on MatchCompleted event trigger
  match.totalAmount = match.totalAmount.plus(divDecimalBD(event.params.amount));

  match.save();
}

export function handleClaim(event: Claim): void {
  const betId =
    event.params.sender.toHex() + "-" + event.params.matchId.toHex();
  let bet = Bet.load(betId);
  if (bet === null) {
    log.error("Tried to query bet after claim (betId : {})", [betId]);
  }
  bet.claimed = true;
  bet.claimedAmount = divDecimalBD(event.params.amount);
  bet.save();
}

export function handleRefund(event: Refund): void {
  const betId =
    event.params.sender.toHex() + "-" + event.params.matchId.toHex();
  let bet = Bet.load(betId);
  if (bet === null) {
    log.error("Tried to query bet after refund (betId : {})", [betId]);
  }
  bet.refunded = true;
  bet.refundedAmount = divDecimalBD(event.params.amount);
  bet.save();
}

export function handleClaimTreasury(event: ClaimTreasury): void {
  let tournament = getTournament();
  tournament.claimedTreasuryAmount = tournament.claimedTreasuryAmount.plus(
    divDecimalBD(event.params.amount)
  );
  tournament.save();
}

export function handleRewardRateUpdated(event: RewardRateUpdated): void {
  let tournament = getTournament();
  tournament.rewardRate = BigInt.fromI32(event.params.rewardRate);
  tournament.save();
}

export function handleMinimumBetAmountUpdated(
  event: MinimumBetAmountUpdated
): void {
  let tournament = getTournament();
  tournament.minBetAmount = divDecimalBD(event.params.minBetAmount);
  tournament.save();
}

export function handlePaused(event: Paused): void {
  let tournament = getTournament();
  tournament.paused = true;
  tournament.save();
}

export function handleUnpaused(event: Unpaused): void {
  let tournament = getTournament();
  tournament.paused = false;
  tournament.save();
}

const getTournament = (): Tournament | null => {
  let tournament: Tournament | null = Tournament.load("1");
  if (tournament == null) {
    tournament = new Tournament("1");
    tournament.paused = false;
    tournament.minBetAmount = BASE_MIN_BET_AMOUNT;
    tournament.rewardRate = BASE_REWARD_RATE;
    tournament.totalBets = ZERO_BI;
    tournament.totalAmount = ZERO_BD;
    tournament.rewardAmount = ZERO_BD;
    tournament.treasuryAmount = ZERO_BD;
    tournament.claimedTreasuryAmount = ZERO_BD;
  }
  return tournament;
};
