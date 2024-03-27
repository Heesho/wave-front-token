// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class WaveFrontMulticall__contributesResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getTotalContributed(): BigInt {
    return this.value0;
  }

  getAccountContributed(): BigInt {
    return this.value1;
  }
}

export class WaveFrontMulticall__getAccountDataResultAccountDataStruct extends ethereum.Tuple {
  get baseContributed(): BigInt {
    return this[0].toBigInt();
  }

  get tokenRedeemable(): BigInt {
    return this[1].toBigInt();
  }

  get tokenBalance(): BigInt {
    return this[2].toBigInt();
  }

  get baseClaimable(): BigInt {
    return this[3].toBigInt();
  }

  get baseCredit(): BigInt {
    return this[4].toBigInt();
  }

  get baseDebt(): BigInt {
    return this[5].toBigInt();
  }
}

export class WaveFrontMulticall__getTokenDataResultTokenDataStruct extends ethereum.Tuple {
  get index(): BigInt {
    return this[0].toBigInt();
  }

  get token(): Address {
    return this[1].toAddress();
  }

  get preToken(): Address {
    return this[2].toAddress();
  }

  get fees(): Address {
    return this[3].toAddress();
  }

  get name(): string {
    return this[4].toString();
  }

  get symbol(): string {
    return this[5].toString();
  }

  get uri(): string {
    return this[6].toString();
  }

  get status(): string {
    return this[7].toString();
  }

  get statusHolder(): Address {
    return this[8].toAddress();
  }

  get marketOpen(): boolean {
    return this[9].toBoolean();
  }

  get marketOpenTimestamp(): BigInt {
    return this[10].toBigInt();
  }

  get reserveVirtualBase(): BigInt {
    return this[11].toBigInt();
  }

  get reserveBase(): BigInt {
    return this[12].toBigInt();
  }

  get reserveToken(): BigInt {
    return this[13].toBigInt();
  }

  get totalSupply(): BigInt {
    return this[14].toBigInt();
  }

  get baseContributed(): BigInt {
    return this[15].toBigInt();
  }

  get preTokenBalance(): BigInt {
    return this[16].toBigInt();
  }

  get floorPrice(): BigInt {
    return this[17].toBigInt();
  }

  get marketPrice(): BigInt {
    return this[18].toBigInt();
  }

  get totalRewardsBase(): BigInt {
    return this[19].toBigInt();
  }

  get totalDebt(): BigInt {
    return this[20].toBigInt();
  }
}

export class WaveFrontMulticall__quoteBuyInResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getOutput(): BigInt {
    return this.value0;
  }

  getSlippage(): BigInt {
    return this.value1;
  }

  getMinOutput(): BigInt {
    return this.value2;
  }

  getAutoMinOutput(): BigInt {
    return this.value3;
  }
}

export class WaveFrontMulticall__quoteBuyOutResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getOutput(): BigInt {
    return this.value0;
  }

  getSlippage(): BigInt {
    return this.value1;
  }

  getMinOutput(): BigInt {
    return this.value2;
  }

  getAutoMinOutput(): BigInt {
    return this.value3;
  }
}

export class WaveFrontMulticall__quoteSellInResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getOutput(): BigInt {
    return this.value0;
  }

  getSlippage(): BigInt {
    return this.value1;
  }

  getMinOutput(): BigInt {
    return this.value2;
  }

  getAutoMinOutput(): BigInt {
    return this.value3;
  }
}

export class WaveFrontMulticall__quoteSellOutResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getOutput(): BigInt {
    return this.value0;
  }

  getSlippage(): BigInt {
    return this.value1;
  }

  getMinOutput(): BigInt {
    return this.value2;
  }

  getAutoMinOutput(): BigInt {
    return this.value3;
  }
}

export class WaveFrontMulticall extends ethereum.SmartContract {
  static bind(address: Address): WaveFrontMulticall {
    return new WaveFrontMulticall("WaveFrontMulticall", address);
  }

  DIVISOR(): BigInt {
    let result = super.call("DIVISOR", "DIVISOR():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DIVISOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DIVISOR", "DIVISOR():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  FEE(): BigInt {
    let result = super.call("FEE", "FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("FEE", "FEE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRECISION(): BigInt {
    let result = super.call("PRECISION", "PRECISION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRECISION", "PRECISION():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  base(): Address {
    let result = super.call("base", "base():(address)", []);

    return result[0].toAddress();
  }

  try_base(): ethereum.CallResult<Address> {
    let result = super.tryCall("base", "base():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  contributes(
    token: Address,
    account: Address,
  ): WaveFrontMulticall__contributesResult {
    let result = super.call(
      "contributes",
      "contributes(address,address):(uint256,uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)],
    );

    return new WaveFrontMulticall__contributesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_contributes(
    token: Address,
    account: Address,
  ): ethereum.CallResult<WaveFrontMulticall__contributesResult> {
    let result = super.tryCall(
      "contributes",
      "contributes(address,address):(uint256,uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WaveFrontMulticall__contributesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  getAccountData(
    token: Address,
    account: Address,
  ): WaveFrontMulticall__getAccountDataResultAccountDataStruct {
    let result = super.call(
      "getAccountData",
      "getAccountData(address,address):((uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)],
    );

    return changetype<WaveFrontMulticall__getAccountDataResultAccountDataStruct>(
      result[0].toTuple(),
    );
  }

  try_getAccountData(
    token: Address,
    account: Address,
  ): ethereum.CallResult<WaveFrontMulticall__getAccountDataResultAccountDataStruct> {
    let result = super.tryCall(
      "getAccountData",
      "getAccountData(address,address):((uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<WaveFrontMulticall__getAccountDataResultAccountDataStruct>(
        value[0].toTuple(),
      ),
    );
  }

  getIndexBySymbol(symbol: string): BigInt {
    let result = super.call(
      "getIndexBySymbol",
      "getIndexBySymbol(string):(uint256)",
      [ethereum.Value.fromString(symbol)],
    );

    return result[0].toBigInt();
  }

  try_getIndexBySymbol(symbol: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getIndexBySymbol",
      "getIndexBySymbol(string):(uint256)",
      [ethereum.Value.fromString(symbol)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getIndexByToken(token: Address): BigInt {
    let result = super.call(
      "getIndexByToken",
      "getIndexByToken(address):(uint256)",
      [ethereum.Value.fromAddress(token)],
    );

    return result[0].toBigInt();
  }

  try_getIndexByToken(token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getIndexByToken",
      "getIndexByToken(address):(uint256)",
      [ethereum.Value.fromAddress(token)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenByIndex(index: BigInt): Address {
    let result = super.call(
      "getTokenByIndex",
      "getTokenByIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );

    return result[0].toAddress();
  }

  try_getTokenByIndex(index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenByIndex",
      "getTokenByIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenCount(): BigInt {
    let result = super.call("getTokenCount", "getTokenCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTokenCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenCount",
      "getTokenCount():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenData(
    token: Address,
  ): WaveFrontMulticall__getTokenDataResultTokenDataStruct {
    let result = super.call(
      "getTokenData",
      "getTokenData(address):((uint256,address,address,address,string,string,string,string,address,bool,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(token)],
    );

    return changetype<WaveFrontMulticall__getTokenDataResultTokenDataStruct>(
      result[0].toTuple(),
    );
  }

  try_getTokenData(
    token: Address,
  ): ethereum.CallResult<WaveFrontMulticall__getTokenDataResultTokenDataStruct> {
    let result = super.tryCall(
      "getTokenData",
      "getTokenData(address):((uint256,address,address,address,string,string,string,string,address,bool,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(token)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<WaveFrontMulticall__getTokenDataResultTokenDataStruct>(
        value[0].toTuple(),
      ),
    );
  }

  quoteBuyIn(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): WaveFrontMulticall__quoteBuyInResult {
    let result = super.call(
      "quoteBuyIn",
      "quoteBuyIn(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );

    return new WaveFrontMulticall__quoteBuyInResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
    );
  }

  try_quoteBuyIn(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): ethereum.CallResult<WaveFrontMulticall__quoteBuyInResult> {
    let result = super.tryCall(
      "quoteBuyIn",
      "quoteBuyIn(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WaveFrontMulticall__quoteBuyInResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
      ),
    );
  }

  quoteBuyOut(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): WaveFrontMulticall__quoteBuyOutResult {
    let result = super.call(
      "quoteBuyOut",
      "quoteBuyOut(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );

    return new WaveFrontMulticall__quoteBuyOutResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
    );
  }

  try_quoteBuyOut(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): ethereum.CallResult<WaveFrontMulticall__quoteBuyOutResult> {
    let result = super.tryCall(
      "quoteBuyOut",
      "quoteBuyOut(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WaveFrontMulticall__quoteBuyOutResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
      ),
    );
  }

  quoteSellIn(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): WaveFrontMulticall__quoteSellInResult {
    let result = super.call(
      "quoteSellIn",
      "quoteSellIn(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );

    return new WaveFrontMulticall__quoteSellInResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
    );
  }

  try_quoteSellIn(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): ethereum.CallResult<WaveFrontMulticall__quoteSellInResult> {
    let result = super.tryCall(
      "quoteSellIn",
      "quoteSellIn(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WaveFrontMulticall__quoteSellInResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
      ),
    );
  }

  quoteSellOut(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): WaveFrontMulticall__quoteSellOutResult {
    let result = super.call(
      "quoteSellOut",
      "quoteSellOut(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );

    return new WaveFrontMulticall__quoteSellOutResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
    );
  }

  try_quoteSellOut(
    token: Address,
    input: BigInt,
    slippageTolerance: BigInt,
  ): ethereum.CallResult<WaveFrontMulticall__quoteSellOutResult> {
    let result = super.tryCall(
      "quoteSellOut",
      "quoteSellOut(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(input),
        ethereum.Value.fromUnsignedBigInt(slippageTolerance),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WaveFrontMulticall__quoteSellOutResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
      ),
    );
  }

  waveFrontFactory(): Address {
    let result = super.call(
      "waveFrontFactory",
      "waveFrontFactory():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_waveFrontFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "waveFrontFactory",
      "waveFrontFactory():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _waveFrontFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _base(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
