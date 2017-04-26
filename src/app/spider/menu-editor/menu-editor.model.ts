export class IVRList {
  private _id: number;
  private _companyName: string;
  private _ivrNumber: string;
  private _priority: number;
  private _status: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get companyName(): string {
    return this._companyName;
  }

  set companyName(value: string) {
    this._companyName = value;
  }

  get ivrNumber(): string {
    return this._ivrNumber;
  }

  set ivrNumber(value: string) {
    this._ivrNumber = value;
  }

  get priority(): number {
    return this._priority;
  }

  set priority(value: number) {
    this._priority = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
