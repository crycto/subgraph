// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BetScore extends ethereum.Event {
  get params(): BetScore__Params {
    return new BetScore__Params(this);
  }
}

export class BetScore__Params {
  _event: BetScore;

  constructor(event: BetScore) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get score(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ClaimTreasury extends ethereum.Event {
  get params(): ClaimTreasury__Params {
    return new ClaimTreasury__Params(this);
  }
}

export class ClaimTreasury__Params {
  _event: ClaimTreasury;

  constructor(event: ClaimTreasury) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DeadlineUpdated extends ethereum.Event {
  get params(): DeadlineUpdated__Params {
    return new DeadlineUpdated__Params(this);
  }
}

export class DeadlineUpdated__Params {
  _event: DeadlineUpdated;

  constructor(event: DeadlineUpdated) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get umpire(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get deadline(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MatchCompleted extends ethereum.Event {
  get params(): MatchCompleted__Params {
    return new MatchCompleted__Params(this);
  }
}

export class MatchCompleted__Params {
  _event: MatchCompleted;

  constructor(event: MatchCompleted) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get umpire(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get winningScore(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewardAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get treasuryAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class MatchCreated extends ethereum.Event {
  get params(): MatchCreated__Params {
    return new MatchCreated__Params(this);
  }
}

export class MatchCreated__Params {
  _event: MatchCreated;

  constructor(event: MatchCreated) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get umpire(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get uri(): string {
    return this._event.parameters[2].value.toString();
  }

  get minScore(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get scoreMultiple(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get rewardRate(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get deadline(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class MatchForfeited extends ethereum.Event {
  get params(): MatchForfeited__Params {
    return new MatchForfeited__Params(this);
  }
}

export class MatchForfeited__Params {
  _event: MatchForfeited;

  constructor(event: MatchForfeited) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get umpire(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MinimumBetAmountUpdated extends ethereum.Event {
  get params(): MinimumBetAmountUpdated__Params {
    return new MinimumBetAmountUpdated__Params(this);
  }
}

export class MinimumBetAmountUpdated__Params {
  _event: MinimumBetAmountUpdated;

  constructor(event: MinimumBetAmountUpdated) {
    this._event = event;
  }

  get minBetAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Refund extends ethereum.Event {
  get params(): Refund__Params {
    return new Refund__Params(this);
  }
}

export class Refund__Params {
  _event: Refund;

  constructor(event: Refund) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RewardRateUpdated extends ethereum.Event {
  get params(): RewardRateUpdated__Params {
    return new RewardRateUpdated__Params(this);
  }
}

export class RewardRateUpdated__Params {
  _event: RewardRateUpdated;

  constructor(event: RewardRateUpdated) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rewardRate(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TournamentV1__matchesResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: i32;
  value5: i32;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: string,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: i32,
    value5: i32,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    return map;
  }
}

export class TournamentV1__getUserMatchesResult {
  value0: Array<BigInt>;
  value1: BigInt;

  constructor(value0: Array<BigInt>, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class TournamentV1 extends ethereum.SmartContract {
  static bind(address: Address): TournamentV1 {
    return new TournamentV1("TournamentV1", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TOTAL_RATE(): i32 {
    let result = super.call("TOTAL_RATE", "TOTAL_RATE():(uint8)", []);

    return result[0].toI32();
  }

  try_TOTAL_RATE(): ethereum.CallResult<i32> {
    let result = super.tryCall("TOTAL_RATE", "TOTAL_RATE():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  UMPIRE_ROLE(): Bytes {
    let result = super.call("UMPIRE_ROLE", "UMPIRE_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_UMPIRE_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("UMPIRE_ROLE", "UMPIRE_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  matches(param0: BigInt): TournamentV1__matchesResult {
    let result = super.call(
      "matches",
      "matches(uint256):(string,uint32,uint32,uint32,uint8,uint8,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TournamentV1__matchesResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toI32(),
      result[5].toI32(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_matches(
    param0: BigInt
  ): ethereum.CallResult<TournamentV1__matchesResult> {
    let result = super.tryCall(
      "matches",
      "matches(uint256):(string,uint32,uint32,uint32,uint8,uint8,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TournamentV1__matchesResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toI32(),
        value[5].toI32(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }

  minBetAmount(): BigInt {
    let result = super.call("minBetAmount", "minBetAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minBetAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minBetAmount", "minBetAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  president(): Address {
    let result = super.call("president", "president():(address)", []);

    return result[0].toAddress();
  }

  try_president(): ethereum.CallResult<Address> {
    let result = super.tryCall("president", "president():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardRate(): i32 {
    let result = super.call("rewardRate", "rewardRate():(uint8)", []);

    return result[0].toI32();
  }

  try_rewardRate(): ethereum.CallResult<i32> {
    let result = super.tryCall("rewardRate", "rewardRate():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  treasuryAmount(): BigInt {
    let result = super.call("treasuryAmount", "treasuryAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_treasuryAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "treasuryAmount",
      "treasuryAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createMatch(
    _uri: string,
    _minScore: BigInt,
    _scoreMultiple: BigInt,
    _deadline: BigInt
  ): BigInt {
    let result = super.call(
      "createMatch",
      "createMatch(string,uint32,uint32,uint256):(uint256)",
      [
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromUnsignedBigInt(_minScore),
        ethereum.Value.fromUnsignedBigInt(_scoreMultiple),
        ethereum.Value.fromUnsignedBigInt(_deadline)
      ]
    );

    return result[0].toBigInt();
  }

  try_createMatch(
    _uri: string,
    _minScore: BigInt,
    _scoreMultiple: BigInt,
    _deadline: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createMatch",
      "createMatch(string,uint32,uint32,uint256):(uint256)",
      [
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromUnsignedBigInt(_minScore),
        ethereum.Value.fromUnsignedBigInt(_scoreMultiple),
        ethereum.Value.fromUnsignedBigInt(_deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimable(_matchId: BigInt, _user: Address): boolean {
    let result = super.call("claimable", "claimable(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_matchId),
      ethereum.Value.fromAddress(_user)
    ]);

    return result[0].toBoolean();
  }

  try_claimable(
    _matchId: BigInt,
    _user: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "claimable",
      "claimable(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_matchId),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getRewardMultiplier(_matchId: BigInt, _score: BigInt): BigInt {
    let result = super.call(
      "getRewardMultiplier",
      "getRewardMultiplier(uint256,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_matchId),
        ethereum.Value.fromUnsignedBigInt(_score)
      ]
    );

    return result[0].toBigInt();
  }

  try_getRewardMultiplier(
    _matchId: BigInt,
    _score: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRewardMultiplier",
      "getRewardMultiplier(uint256,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_matchId),
        ethereum.Value.fromUnsignedBigInt(_score)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isHouseWin(_matchId: BigInt): boolean {
    let result = super.call("isHouseWin", "isHouseWin(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_matchId)
    ]);

    return result[0].toBoolean();
  }

  try_isHouseWin(_matchId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isHouseWin", "isHouseWin(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_matchId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getMatchCount(): BigInt {
    let result = super.call("getMatchCount", "getMatchCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getMatchCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMatchCount",
      "getMatchCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBetsAtScore(_matchId: BigInt, _score: BigInt): BigInt {
    let result = super.call(
      "getBetsAtScore",
      "getBetsAtScore(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_matchId),
        ethereum.Value.fromUnsignedBigInt(_score)
      ]
    );

    return result[0].toBigInt();
  }

  try_getBetsAtScore(
    _matchId: BigInt,
    _score: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBetsAtScore",
      "getBetsAtScore(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_matchId),
        ethereum.Value.fromUnsignedBigInt(_score)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isDeadlinePassed(_matchId: BigInt): boolean {
    let result = super.call(
      "isDeadlinePassed",
      "isDeadlinePassed(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_matchId)]
    );

    return result[0].toBoolean();
  }

  try_isDeadlinePassed(_matchId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isDeadlinePassed",
      "isDeadlinePassed(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_matchId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getUserMatches(
    _user: Address,
    _cursor: BigInt,
    _size: BigInt
  ): TournamentV1__getUserMatchesResult {
    let result = super.call(
      "getUserMatches",
      "getUserMatches(address,uint256,uint256):(uint256[],uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(_cursor),
        ethereum.Value.fromUnsignedBigInt(_size)
      ]
    );

    return new TournamentV1__getUserMatchesResult(
      result[0].toBigIntArray(),
      result[1].toBigInt()
    );
  }

  try_getUserMatches(
    _user: Address,
    _cursor: BigInt,
    _size: BigInt
  ): ethereum.CallResult<TournamentV1__getUserMatchesResult> {
    let result = super.tryCall(
      "getUserMatches",
      "getUserMatches(address,uint256,uint256):(uint256[],uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(_cursor),
        ethereum.Value.fromUnsignedBigInt(_size)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TournamentV1__getUserMatchesResult(
        value[0].toBigIntArray(),
        value[1].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _president(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetPresidentCall extends ethereum.Call {
  get inputs(): SetPresidentCall__Inputs {
    return new SetPresidentCall__Inputs(this);
  }

  get outputs(): SetPresidentCall__Outputs {
    return new SetPresidentCall__Outputs(this);
  }
}

export class SetPresidentCall__Inputs {
  _call: SetPresidentCall;

  constructor(call: SetPresidentCall) {
    this._call = call;
  }

  get _president(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPresidentCall__Outputs {
  _call: SetPresidentCall;

  constructor(call: SetPresidentCall) {
    this._call = call;
  }
}

export class CreateMatchCall extends ethereum.Call {
  get inputs(): CreateMatchCall__Inputs {
    return new CreateMatchCall__Inputs(this);
  }

  get outputs(): CreateMatchCall__Outputs {
    return new CreateMatchCall__Outputs(this);
  }
}

export class CreateMatchCall__Inputs {
  _call: CreateMatchCall;

  constructor(call: CreateMatchCall) {
    this._call = call;
  }

  get _uri(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _minScore(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _scoreMultiple(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateMatchCall__Outputs {
  _call: CreateMatchCall;

  constructor(call: CreateMatchCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateDeadlineCall extends ethereum.Call {
  get inputs(): UpdateDeadlineCall__Inputs {
    return new UpdateDeadlineCall__Inputs(this);
  }

  get outputs(): UpdateDeadlineCall__Outputs {
    return new UpdateDeadlineCall__Outputs(this);
  }
}

export class UpdateDeadlineCall__Inputs {
  _call: UpdateDeadlineCall;

  constructor(call: UpdateDeadlineCall) {
    this._call = call;
  }

  get _matchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateDeadlineCall__Outputs {
  _call: UpdateDeadlineCall;

  constructor(call: UpdateDeadlineCall) {
    this._call = call;
  }
}

export class ForfeitMatchCall extends ethereum.Call {
  get inputs(): ForfeitMatchCall__Inputs {
    return new ForfeitMatchCall__Inputs(this);
  }

  get outputs(): ForfeitMatchCall__Outputs {
    return new ForfeitMatchCall__Outputs(this);
  }
}

export class ForfeitMatchCall__Inputs {
  _call: ForfeitMatchCall;

  constructor(call: ForfeitMatchCall) {
    this._call = call;
  }

  get _matchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ForfeitMatchCall__Outputs {
  _call: ForfeitMatchCall;

  constructor(call: ForfeitMatchCall) {
    this._call = call;
  }
}

export class EndMatchCall extends ethereum.Call {
  get inputs(): EndMatchCall__Inputs {
    return new EndMatchCall__Inputs(this);
  }

  get outputs(): EndMatchCall__Outputs {
    return new EndMatchCall__Outputs(this);
  }
}

export class EndMatchCall__Inputs {
  _call: EndMatchCall;

  constructor(call: EndMatchCall) {
    this._call = call;
  }

  get _matchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _winningScore(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EndMatchCall__Outputs {
  _call: EndMatchCall;

  constructor(call: EndMatchCall) {
    this._call = call;
  }
}

export class BetScoreCall extends ethereum.Call {
  get inputs(): BetScoreCall__Inputs {
    return new BetScoreCall__Inputs(this);
  }

  get outputs(): BetScoreCall__Outputs {
    return new BetScoreCall__Outputs(this);
  }
}

export class BetScoreCall__Inputs {
  _call: BetScoreCall;

  constructor(call: BetScoreCall) {
    this._call = call;
  }

  get _matchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _score(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BetScoreCall__Outputs {
  _call: BetScoreCall;

  constructor(call: BetScoreCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get _matchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class RefundCall extends ethereum.Call {
  get inputs(): RefundCall__Inputs {
    return new RefundCall__Inputs(this);
  }

  get outputs(): RefundCall__Outputs {
    return new RefundCall__Outputs(this);
  }
}

export class RefundCall__Inputs {
  _call: RefundCall;

  constructor(call: RefundCall) {
    this._call = call;
  }

  get _matchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RefundCall__Outputs {
  _call: RefundCall;

  constructor(call: RefundCall) {
    this._call = call;
  }
}

export class SetRewardRateCall extends ethereum.Call {
  get inputs(): SetRewardRateCall__Inputs {
    return new SetRewardRateCall__Inputs(this);
  }

  get outputs(): SetRewardRateCall__Outputs {
    return new SetRewardRateCall__Outputs(this);
  }
}

export class SetRewardRateCall__Inputs {
  _call: SetRewardRateCall;

  constructor(call: SetRewardRateCall) {
    this._call = call;
  }

  get _rewardRate(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetRewardRateCall__Outputs {
  _call: SetRewardRateCall;

  constructor(call: SetRewardRateCall) {
    this._call = call;
  }
}

export class SetMinBetAmountCall extends ethereum.Call {
  get inputs(): SetMinBetAmountCall__Inputs {
    return new SetMinBetAmountCall__Inputs(this);
  }

  get outputs(): SetMinBetAmountCall__Outputs {
    return new SetMinBetAmountCall__Outputs(this);
  }
}

export class SetMinBetAmountCall__Inputs {
  _call: SetMinBetAmountCall;

  constructor(call: SetMinBetAmountCall) {
    this._call = call;
  }

  get _minBetAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinBetAmountCall__Outputs {
  _call: SetMinBetAmountCall;

  constructor(call: SetMinBetAmountCall) {
    this._call = call;
  }
}

export class ClaimTreasuryCall extends ethereum.Call {
  get inputs(): ClaimTreasuryCall__Inputs {
    return new ClaimTreasuryCall__Inputs(this);
  }

  get outputs(): ClaimTreasuryCall__Outputs {
    return new ClaimTreasuryCall__Outputs(this);
  }
}

export class ClaimTreasuryCall__Inputs {
  _call: ClaimTreasuryCall;

  constructor(call: ClaimTreasuryCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimTreasuryCall__Outputs {
  _call: ClaimTreasuryCall;

  constructor(call: ClaimTreasuryCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}
