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

export class AvatarNftEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
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

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
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

  get reputations(): Array<string> {
    let value = this.get("reputations");
    return value!.toStringArray();
  }

  set reputations(value: Array<string>) {
    this.set("reputations", Value.fromStringArray(value));
  }
}

export class AvatarNftReputationEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromString(""));
    this.set("domain", Value.fromI32(0));
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

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get domain(): i32 {
    let value = this.get("domain");
    return value!.toI32();
  }

  set domain(value: i32) {
    this.set("domain", Value.fromI32(value));
  }

  get negativeRating(): BigInt | null {
    let value = this.get("negativeRating");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set negativeRating(value: BigInt | null) {
    if (!value) {
      this.unset("negativeRating");
    } else {
      this.set("negativeRating", Value.fromBigInt(<BigInt>value));
    }
  }

  get positiveRating(): BigInt | null {
    let value = this.get("positiveRating");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set positiveRating(value: BigInt | null) {
    if (!value) {
      this.unset("positiveRating");
    } else {
      this.set("positiveRating", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class JurisdictionParticipantEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JurisdictionParticipantEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionParticipantEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionParticipantEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionParticipantEntity | null {
    return changetype<JurisdictionParticipantEntity | null>(
      store.get("JurisdictionParticipantEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isAdmin(): boolean {
    let value = this.get("isAdmin");
    return value!.toBoolean();
  }

  set isAdmin(value: boolean) {
    this.set("isAdmin", Value.fromBoolean(value));
  }

  get isMember(): boolean {
    let value = this.get("isMember");
    return value!.toBoolean();
  }

  set isMember(value: boolean) {
    this.set("isMember", Value.fromBoolean(value));
  }

  get isJudge(): boolean {
    let value = this.get("isJudge");
    return value!.toBoolean();
  }

  set isJudge(value: boolean) {
    this.set("isJudge", Value.fromBoolean(value));
  }
}

export class JurisdictionRuleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("about", Value.fromString(""));
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

  get about(): string {
    let value = this.get("about");
    return value!.toString();
  }

  set about(value: string) {
    this.set("about", Value.fromString(value));
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

  get negation(): boolean {
    let value = this.get("negation");
    return value!.toBoolean();
  }

  set negation(value: boolean) {
    this.set("negation", Value.fromBoolean(value));
  }

  get effectsEnvironmental(): i32 {
    let value = this.get("effectsEnvironmental");
    return value!.toI32();
  }

  set effectsEnvironmental(value: i32) {
    this.set("effectsEnvironmental", Value.fromI32(value));
  }

  get effectsPersonal(): i32 {
    let value = this.get("effectsPersonal");
    return value!.toI32();
  }

  set effectsPersonal(value: i32) {
    this.set("effectsPersonal", Value.fromI32(value));
  }

  get effectsSocial(): i32 {
    let value = this.get("effectsSocial");
    return value!.toI32();
  }

  set effectsSocial(value: i32) {
    this.set("effectsSocial", Value.fromI32(value));
  }

  get effectsProfessional(): i32 {
    let value = this.get("effectsProfessional");
    return value!.toI32();
  }

  set effectsProfessional(value: i32) {
    this.set("effectsProfessional", Value.fromI32(value));
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

    this.set("jurisdiction", Value.fromBytes(Bytes.empty()));
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

  get jurisdiction(): Bytes {
    let value = this.get("jurisdiction");
    return value!.toBytes();
  }

  set jurisdiction(value: Bytes) {
    this.set("jurisdiction", Value.fromBytes(value));
  }

  get participants(): Array<string> {
    let value = this.get("participants");
    return value!.toStringArray();
  }

  set participants(value: Array<string>) {
    this.set("participants", Value.fromStringArray(value));
  }
}

export class CaseParticipantEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("caseEntity", Value.fromString(""));
    this.set("account", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save CaseParticipantEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CaseParticipantEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CaseParticipantEntity", id.toString(), this);
    }
  }

  static load(id: string): CaseParticipantEntity | null {
    return changetype<CaseParticipantEntity | null>(
      store.get("CaseParticipantEntity", id)
    );
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

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get isAdmin(): boolean {
    let value = this.get("isAdmin");
    return value!.toBoolean();
  }

  set isAdmin(value: boolean) {
    this.set("isAdmin", Value.fromBoolean(value));
  }

  get isSubject(): boolean {
    let value = this.get("isSubject");
    return value!.toBoolean();
  }

  set isSubject(value: boolean) {
    this.set("isSubject", Value.fromBoolean(value));
  }

  get isPlaintiff(): boolean {
    let value = this.get("isPlaintiff");
    return value!.toBoolean();
  }

  set isPlaintiff(value: boolean) {
    this.set("isPlaintiff", Value.fromBoolean(value));
  }

  get isJudge(): boolean {
    let value = this.get("isJudge");
    return value!.toBoolean();
  }

  set isJudge(value: boolean) {
    this.set("isJudge", Value.fromBoolean(value));
  }

  get isWitness(): boolean {
    let value = this.get("isWitness");
    return value!.toBoolean();
  }

  set isWitness(value: boolean) {
    this.set("isWitness", Value.fromBoolean(value));
  }

  get isAffected(): boolean {
    let value = this.get("isAffected");
    return value!.toBoolean();
  }

  set isAffected(value: boolean) {
    this.set("isAffected", Value.fromBoolean(value));
  }
}
