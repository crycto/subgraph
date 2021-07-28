import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
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
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Unpaused
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleBetScore(event: BetScore): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.matchId = event.params.matchId
  entity.sender = event.params.sender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.MIN_BET_AMOUNT(...)
  // - contract.TOTAL_RATE(...)
  // - contract.UMPIRE_ROLE(...)
  // - contract.getRoleAdmin(...)
  // - contract.getRoleMember(...)
  // - contract.getRoleMemberCount(...)
  // - contract.hasRole(...)
  // - contract.matches(...)
  // - contract.paused(...)
  // - contract.president(...)
  // - contract.rewardRate(...)
  // - contract.supportsInterface(...)
  // - contract.treasuryAmount(...)
  // - contract.createMatch(...)
  // - contract.claimable(...)
  // - contract.getRewardMultiplier(...)
  // - contract.isHouseWin(...)
  // - contract.getMatchCount(...)
  // - contract.getBetsAtScore(...)
  // - contract.isDeadlinePassed(...)
  // - contract.getUserMatches(...)
}

export function handleClaim(event: Claim): void {}

export function handleClaimTreasury(event: ClaimTreasury): void {}

export function handleDeadlineUpdated(event: DeadlineUpdated): void {}

export function handleMatchCompleted(event: MatchCompleted): void {}

export function handleMatchCreated(event: MatchCreated): void {}

export function handleMatchForfeited(event: MatchForfeited): void {}

export function handlePaused(event: Paused): void {}

export function handleRefund(event: Refund): void {}

export function handleRewardRateUpdated(event: RewardRateUpdated): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleUnpaused(event: Unpaused): void {}
