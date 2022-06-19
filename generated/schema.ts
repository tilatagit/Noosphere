// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AccountEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("avatarNft", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccountEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccountEntity", id.toString(), this);
    }
  }

  static load(id: string): AccountEntity | null {
    return changetype<AccountEntity | null>(store.get("AccountEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get avatarNft(): string {
    let value = this.get("avatarNft");
    return value!.toString();
  }

  set avatarNft(value: string) {
    this.set("avatarNft", Value.fromString(value));
  }
}

export class AvatarNftEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("idBigInt", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("totalNegativeRating", Value.fromBigInt(BigInt.zero()));
    this.set("totalPositiveRating", Value.fromBigInt(BigInt.zero()));
    this.set("totalNegativeCases", Value.fromBigInt(BigInt.zero()));
    this.set("totalPositiveCases", Value.fromBigInt(BigInt.zero()));
    this.set("jurisdictions", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AvatarNftEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AvatarNftEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AvatarNftEntity", id.toString(), this);
    }
  }

  static load(id: string): AvatarNftEntity | null {
    return changetype<AvatarNftEntity | null>(store.get("AvatarNftEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get idBigInt(): BigInt {
    let value = this.get("idBigInt");
    return value!.toBigInt();
  }

  set idBigInt(value: BigInt) {
    this.set("idBigInt", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get uriImage(): string | null {
    let value = this.get("uriImage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriImage(value: string | null) {
    if (!value) {
      this.unset("uriImage");
    } else {
      this.set("uriImage", Value.fromString(<string>value));
    }
  }

  get uriFirstName(): string | null {
    let value = this.get("uriFirstName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriFirstName(value: string | null) {
    if (!value) {
      this.unset("uriFirstName");
    } else {
      this.set("uriFirstName", Value.fromString(<string>value));
    }
  }

  get uriLastName(): string | null {
    let value = this.get("uriLastName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriLastName(value: string | null) {
    if (!value) {
      this.unset("uriLastName");
    } else {
      this.set("uriLastName", Value.fromString(<string>value));
    }
  }

  get reputations(): Array<string> {
    let value = this.get("reputations");
    return value!.toStringArray();
  }

  set reputations(value: Array<string>) {
    this.set("reputations", Value.fromStringArray(value));
  }

  get totalNegativeRating(): BigInt {
    let value = this.get("totalNegativeRating");
    return value!.toBigInt();
  }

  set totalNegativeRating(value: BigInt) {
    this.set("totalNegativeRating", Value.fromBigInt(value));
  }

  get totalPositiveRating(): BigInt {
    let value = this.get("totalPositiveRating");
    return value!.toBigInt();
  }

  set totalPositiveRating(value: BigInt) {
    this.set("totalPositiveRating", Value.fromBigInt(value));
  }

  get totalNegativeCases(): BigInt {
    let value = this.get("totalNegativeCases");
    return value!.toBigInt();
  }

  set totalNegativeCases(value: BigInt) {
    this.set("totalNegativeCases", Value.fromBigInt(value));
  }

  get totalPositiveCases(): BigInt {
    let value = this.get("totalPositiveCases");
    return value!.toBigInt();
  }

  set totalPositiveCases(value: BigInt) {
    this.set("totalPositiveCases", Value.fromBigInt(value));
  }

  get jurisdictions(): Array<string> {
    let value = this.get("jurisdictions");
    return value!.toStringArray();
  }

  set jurisdictions(value: Array<string>) {
    this.set("jurisdictions", Value.fromStringArray(value));
  }
}

export class AvatarNftReputationEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("avatarNft", Value.fromString(""));
    this.set("jurisdiction", Value.fromString(""));
    this.set("domain", Value.fromString(""));
    this.set("negativeRating", Value.fromBigInt(BigInt.zero()));
    this.set("positiveRating", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AvatarNftReputationEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AvatarNftReputationEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AvatarNftReputationEntity", id.toString(), this);
    }
  }

  static load(id: string): AvatarNftReputationEntity | null {
    return changetype<AvatarNftReputationEntity | null>(
      store.get("AvatarNftReputationEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get avatarNft(): string {
    let value = this.get("avatarNft");
    return value!.toString();
  }

  set avatarNft(value: string) {
    this.set("avatarNft", Value.fromString(value));
  }

  get jurisdiction(): string {
    let value = this.get("jurisdiction");
    return value!.toString();
  }

  set jurisdiction(value: string) {
    this.set("jurisdiction", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value!.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get negativeRating(): BigInt {
    let value = this.get("negativeRating");
    return value!.toBigInt();
  }

  set negativeRating(value: BigInt) {
    this.set("negativeRating", Value.fromBigInt(value));
  }

  get positiveRating(): BigInt {
    let value = this.get("positiveRating");
    return value!.toBigInt();
  }

  set positiveRating(value: BigInt) {
    this.set("positiveRating", Value.fromBigInt(value));
  }
}

export class JurisdictionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("rulesCount", Value.fromI32(0));
    this.set("casesCount", Value.fromI32(0));
    this.set("members", Value.fromStringArray(new Array(0)));
    this.set("judges", Value.fromStringArray(new Array(0)));
    this.set("admins", Value.fromStringArray(new Array(0)));
    this.set("membersCount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save JurisdictionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionEntity | null {
    return changetype<JurisdictionEntity | null>(
      store.get("JurisdictionEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string | null {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set address(value: string | null) {
    if (!value) {
      this.unset("address");
    } else {
      this.set("address", Value.fromString(<string>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get roles(): Array<string> {
    let value = this.get("roles");
    return value!.toStringArray();
  }

  set roles(value: Array<string>) {
    this.set("roles", Value.fromStringArray(value));
  }

  get rules(): Array<string> {
    let value = this.get("rules");
    return value!.toStringArray();
  }

  set rules(value: Array<string>) {
    this.set("rules", Value.fromStringArray(value));
  }

  get rulesCount(): i32 {
    let value = this.get("rulesCount");
    return value!.toI32();
  }

  set rulesCount(value: i32) {
    this.set("rulesCount", Value.fromI32(value));
  }

  get casesCount(): i32 {
    let value = this.get("casesCount");
    return value!.toI32();
  }

  set casesCount(value: i32) {
    this.set("casesCount", Value.fromI32(value));
  }

  get members(): Array<string> {
    let value = this.get("members");
    return value!.toStringArray();
  }

  set members(value: Array<string>) {
    this.set("members", Value.fromStringArray(value));
  }

  get judges(): Array<string> {
    let value = this.get("judges");
    return value!.toStringArray();
  }

  set judges(value: Array<string>) {
    this.set("judges", Value.fromStringArray(value));
  }

  get admins(): Array<string> {
    let value = this.get("admins");
    return value!.toStringArray();
  }

  set admins(value: Array<string>) {
    this.set("admins", Value.fromStringArray(value));
  }

  get membersCount(): i32 {
    let value = this.get("membersCount");
    return value!.toI32();
  }

  set membersCount(value: i32) {
    this.set("membersCount", Value.fromI32(value));
  }
}

export class JurisdictionRoleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("jurisdiction", Value.fromString(""));
    this.set("roleId", Value.fromBigInt(BigInt.zero()));
    this.set("participants", Value.fromStringArray(new Array(0)));
    this.set("participantsCount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JurisdictionRoleEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionRoleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionRoleEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionRoleEntity | null {
    return changetype<JurisdictionRoleEntity | null>(
      store.get("JurisdictionRoleEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get jurisdiction(): string {
    let value = this.get("jurisdiction");
    return value!.toString();
  }

  set jurisdiction(value: string) {
    this.set("jurisdiction", Value.fromString(value));
  }

  get roleId(): BigInt {
    let value = this.get("roleId");
    return value!.toBigInt();
  }

  set roleId(value: BigInt) {
    this.set("roleId", Value.fromBigInt(value));
  }

  get participants(): Array<string> {
    let value = this.get("participants");
    return value!.toStringArray();
  }

  set participants(value: Array<string>) {
    this.set("participants", Value.fromStringArray(value));
  }

  get participantsCount(): i32 {
    let value = this.get("participantsCount");
    return value!.toI32();
  }

  set participantsCount(value: i32) {
    this.set("participantsCount", Value.fromI32(value));
  }
}

export class JurisdictionRuleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("jurisdiction", Value.fromString(""));
    this.set("about", Value.fromString(""));
    this.set("ruleId", Value.fromBigInt(BigInt.zero()));
    this.set("effects", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JurisdictionRuleEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionRuleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionRuleEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionRuleEntity | null {
    return changetype<JurisdictionRuleEntity | null>(
      store.get("JurisdictionRuleEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get jurisdiction(): string {
    let value = this.get("jurisdiction");
    return value!.toString();
  }

  set jurisdiction(value: string) {
    this.set("jurisdiction", Value.fromString(value));
  }

  get about(): string {
    let value = this.get("about");
    return value!.toString();
  }

  set about(value: string) {
    this.set("about", Value.fromString(value));
  }

  get aboutSubject(): string | null {
    let value = this.get("aboutSubject");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set aboutSubject(value: string | null) {
    if (!value) {
      this.unset("aboutSubject");
    } else {
      this.set("aboutSubject", Value.fromString(<string>value));
    }
  }

  get aboutUriName(): string | null {
    let value = this.get("aboutUriName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set aboutUriName(value: string | null) {
    if (!value) {
      this.unset("aboutUriName");
    } else {
      this.set("aboutUriName", Value.fromString(<string>value));
    }
  }

  get ruleId(): BigInt {
    let value = this.get("ruleId");
    return value!.toBigInt();
  }

  set ruleId(value: BigInt) {
    this.set("ruleId", Value.fromBigInt(value));
  }

  get affected(): string | null {
    let value = this.get("affected");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set affected(value: string | null) {
    if (!value) {
      this.unset("affected");
    } else {
      this.set("affected", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get uriName(): string | null {
    let value = this.get("uriName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriName(value: string | null) {
    if (!value) {
      this.unset("uriName");
    } else {
      this.set("uriName", Value.fromString(<string>value));
    }
  }

  get negation(): boolean {
    let value = this.get("negation");
    return value!.toBoolean();
  }

  set negation(value: boolean) {
    this.set("negation", Value.fromBoolean(value));
  }

  get effects(): Array<string> {
    let value = this.get("effects");
    return value!.toStringArray();
  }

  set effects(value: Array<string>) {
    this.set("effects", Value.fromStringArray(value));
  }

  get effectsBlock(): BigInt | null {
    let value = this.get("effectsBlock");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set effectsBlock(value: BigInt | null) {
    if (!value) {
      this.unset("effectsBlock");
    } else {
      this.set("effectsBlock", Value.fromBigInt(<BigInt>value));
    }
  }

  get confirmationRuling(): string | null {
    let value = this.get("confirmationRuling");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set confirmationRuling(value: string | null) {
    if (!value) {
      this.unset("confirmationRuling");
    } else {
      this.set("confirmationRuling", Value.fromString(<string>value));
    }
  }

  get confirmationEvidence(): boolean {
    let value = this.get("confirmationEvidence");
    return value!.toBoolean();
  }

  set confirmationEvidence(value: boolean) {
    this.set("confirmationEvidence", Value.fromBoolean(value));
  }

  get confirmationWitness(): BigInt | null {
    let value = this.get("confirmationWitness");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set confirmationWitness(value: BigInt | null) {
    if (!value) {
      this.unset("confirmationWitness");
    } else {
      this.set("confirmationWitness", Value.fromBigInt(<BigInt>value));
    }
  }

  get isPositive(): boolean {
    let value = this.get("isPositive");
    return value!.toBoolean();
  }

  set isPositive(value: boolean) {
    this.set("isPositive", Value.fromBoolean(value));
  }
}

export class JurisdictionRuleEffectEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("rule", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("direction", Value.fromBoolean(false));
    this.set("value", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JurisdictionRuleEffectEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionRuleEffectEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionRuleEffectEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionRuleEffectEntity | null {
    return changetype<JurisdictionRuleEffectEntity | null>(
      store.get("JurisdictionRuleEffectEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rule(): string {
    let value = this.get("rule");
    return value!.toString();
  }

  set rule(value: string) {
    this.set("rule", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get direction(): boolean {
    let value = this.get("direction");
    return value!.toBoolean();
  }

  set direction(value: boolean) {
    this.set("direction", Value.fromBoolean(value));
  }

  get value(): i32 {
    let value = this.get("value");
    return value!.toI32();
  }

  set value(value: i32) {
    this.set("value", Value.fromI32(value));
  }
}

export class ActionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ActionEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActionEntity", id.toString(), this);
    }
  }

  static load(id: string): ActionEntity | null {
    return changetype<ActionEntity | null>(store.get("ActionEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get subject(): string | null {
    let value = this.get("subject");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set subject(value: string | null) {
    if (!value) {
      this.unset("subject");
    } else {
      this.set("subject", Value.fromString(<string>value));
    }
  }

  get verb(): string | null {
    let value = this.get("verb");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set verb(value: string | null) {
    if (!value) {
      this.unset("verb");
    } else {
      this.set("verb", Value.fromString(<string>value));
    }
  }

  get object(): string | null {
    let value = this.get("object");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set object(value: string | null) {
    if (!value) {
      this.unset("object");
    } else {
      this.set("object", Value.fromString(<string>value));
    }
  }

  get tool(): string | null {
    let value = this.get("tool");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tool(value: string | null) {
    if (!value) {
      this.unset("tool");
    } else {
      this.set("tool", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get uriName(): string | null {
    let value = this.get("uriName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriName(value: string | null) {
    if (!value) {
      this.unset("uriName");
    } else {
      this.set("uriName", Value.fromString(<string>value));
    }
  }

  get rules(): Array<string> {
    let value = this.get("rules");
    return value!.toStringArray();
  }

  set rules(value: Array<string>) {
    this.set("rules", Value.fromStringArray(value));
  }
}

export class CaseEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("jurisdiction", Value.fromString(""));
    this.set("rules", Value.fromStringArray(new Array(0)));
    this.set("participants", Value.fromStringArray(new Array(0)));
    this.set("admins", Value.fromStringArray(new Array(0)));
    this.set("subjects", Value.fromStringArray(new Array(0)));
    this.set("plaintiffs", Value.fromStringArray(new Array(0)));
    this.set("judges", Value.fromStringArray(new Array(0)));
    this.set("witnesses", Value.fromStringArray(new Array(0)));
    this.set("affecteds", Value.fromStringArray(new Array(0)));
    this.set(
      "participantsWithConfirmationPosts",
      Value.fromStringArray(new Array(0))
    );
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CaseEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CaseEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CaseEntity", id.toString(), this);
    }
  }

  static load(id: string): CaseEntity | null {
    return changetype<CaseEntity | null>(store.get("CaseEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get createdDate(): BigInt | null {
    let value = this.get("createdDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdDate(value: BigInt | null) {
    if (!value) {
      this.unset("createdDate");
    } else {
      this.set("createdDate", Value.fromBigInt(<BigInt>value));
    }
  }

  get jurisdiction(): string {
    let value = this.get("jurisdiction");
    return value!.toString();
  }

  set jurisdiction(value: string) {
    this.set("jurisdiction", Value.fromString(value));
  }

  get stage(): i32 {
    let value = this.get("stage");
    return value!.toI32();
  }

  set stage(value: i32) {
    this.set("stage", Value.fromI32(value));
  }

  get verdictAuthor(): string | null {
    let value = this.get("verdictAuthor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set verdictAuthor(value: string | null) {
    if (!value) {
      this.unset("verdictAuthor");
    } else {
      this.set("verdictAuthor", Value.fromString(<string>value));
    }
  }

  get verdictConfirmedRules(): Array<string> | null {
    let value = this.get("verdictConfirmedRules");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set verdictConfirmedRules(value: Array<string> | null) {
    if (!value) {
      this.unset("verdictConfirmedRules");
    } else {
      this.set(
        "verdictConfirmedRules",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get verdictUri(): string | null {
    let value = this.get("verdictUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set verdictUri(value: string | null) {
    if (!value) {
      this.unset("verdictUri");
    } else {
      this.set("verdictUri", Value.fromString(<string>value));
    }
  }

  get verdictUriData(): Bytes | null {
    let value = this.get("verdictUriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set verdictUriData(value: Bytes | null) {
    if (!value) {
      this.unset("verdictUriData");
    } else {
      this.set("verdictUriData", Value.fromBytes(<Bytes>value));
    }
  }

  get cancellationAuthor(): string | null {
    let value = this.get("cancellationAuthor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cancellationAuthor(value: string | null) {
    if (!value) {
      this.unset("cancellationAuthor");
    } else {
      this.set("cancellationAuthor", Value.fromString(<string>value));
    }
  }

  get cancellationUri(): string | null {
    let value = this.get("cancellationUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cancellationUri(value: string | null) {
    if (!value) {
      this.unset("cancellationUri");
    } else {
      this.set("cancellationUri", Value.fromString(<string>value));
    }
  }

  get cancellationUriData(): Bytes | null {
    let value = this.get("cancellationUriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set cancellationUriData(value: Bytes | null) {
    if (!value) {
      this.unset("cancellationUriData");
    } else {
      this.set("cancellationUriData", Value.fromBytes(<Bytes>value));
    }
  }

  get rules(): Array<string> {
    let value = this.get("rules");
    return value!.toStringArray();
  }

  set rules(value: Array<string>) {
    this.set("rules", Value.fromStringArray(value));
  }

  get posts(): Array<string> {
    let value = this.get("posts");
    return value!.toStringArray();
  }

  set posts(value: Array<string>) {
    this.set("posts", Value.fromStringArray(value));
  }

  get participants(): Array<string> {
    let value = this.get("participants");
    return value!.toStringArray();
  }

  set participants(value: Array<string>) {
    this.set("participants", Value.fromStringArray(value));
  }

  get admins(): Array<string> {
    let value = this.get("admins");
    return value!.toStringArray();
  }

  set admins(value: Array<string>) {
    this.set("admins", Value.fromStringArray(value));
  }

  get subjects(): Array<string> {
    let value = this.get("subjects");
    return value!.toStringArray();
  }

  set subjects(value: Array<string>) {
    this.set("subjects", Value.fromStringArray(value));
  }

  get plaintiffs(): Array<string> {
    let value = this.get("plaintiffs");
    return value!.toStringArray();
  }

  set plaintiffs(value: Array<string>) {
    this.set("plaintiffs", Value.fromStringArray(value));
  }

  get judges(): Array<string> {
    let value = this.get("judges");
    return value!.toStringArray();
  }

  set judges(value: Array<string>) {
    this.set("judges", Value.fromStringArray(value));
  }

  get witnesses(): Array<string> {
    let value = this.get("witnesses");
    return value!.toStringArray();
  }

  set witnesses(value: Array<string>) {
    this.set("witnesses", Value.fromStringArray(value));
  }

  get affecteds(): Array<string> {
    let value = this.get("affecteds");
    return value!.toStringArray();
  }

  set affecteds(value: Array<string>) {
    this.set("affecteds", Value.fromStringArray(value));
  }

  get participantsWithConfirmationPosts(): Array<string> {
    let value = this.get("participantsWithConfirmationPosts");
    return value!.toStringArray();
  }

  set participantsWithConfirmationPosts(value: Array<string>) {
    this.set("participantsWithConfirmationPosts", Value.fromStringArray(value));
  }
}

export class CasePostEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("author", Value.fromString(""));
    this.set("caseEntity", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CasePostEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CasePostEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CasePostEntity", id.toString(), this);
    }
  }

  static load(id: string): CasePostEntity | null {
    return changetype<CasePostEntity | null>(store.get("CasePostEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get author(): string {
    let value = this.get("author");
    return value!.toString();
  }

  set author(value: string) {
    this.set("author", Value.fromString(value));
  }

  get createdDate(): BigInt | null {
    let value = this.get("createdDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdDate(value: BigInt | null) {
    if (!value) {
      this.unset("createdDate");
    } else {
      this.set("createdDate", Value.fromBigInt(<BigInt>value));
    }
  }

  get caseEntity(): string {
    let value = this.get("caseEntity");
    return value!.toString();
  }

  set caseEntity(value: string) {
    this.set("caseEntity", Value.fromString(value));
  }

  get entityRole(): string | null {
    let value = this.get("entityRole");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set entityRole(value: string | null) {
    if (!value) {
      this.unset("entityRole");
    } else {
      this.set("entityRole", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get uriType(): string | null {
    let value = this.get("uriType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriType(value: string | null) {
    if (!value) {
      this.unset("uriType");
    } else {
      this.set("uriType", Value.fromString(<string>value));
    }
  }
}

export class CaseEventEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("caseEntity", Value.fromString(""));
    this.set("createdDate", Value.fromBigInt(BigInt.zero()));
    this.set("type", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CaseEventEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CaseEventEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CaseEventEntity", id.toString(), this);
    }
  }

  static load(id: string): CaseEventEntity | null {
    return changetype<CaseEventEntity | null>(store.get("CaseEventEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get caseEntity(): string {
    let value = this.get("caseEntity");
    return value!.toString();
  }

  set caseEntity(value: string) {
    this.set("caseEntity", Value.fromString(value));
  }

  get createdDate(): BigInt {
    let value = this.get("createdDate");
    return value!.toBigInt();
  }

  set createdDate(value: BigInt) {
    this.set("createdDate", Value.fromBigInt(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get data(): Bytes | null {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set data(value: Bytes | null) {
    if (!value) {
      this.unset("data");
    } else {
      this.set("data", Value.fromBytes(<Bytes>value));
    }
  }
}
