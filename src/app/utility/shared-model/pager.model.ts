export class Pager {
  private _recordsPerPage: number;
  private _totalRecords: number;

  get recordsPerPage(): number {
    return this._recordsPerPage;
  }

  set recordsPerPage(value: number) {
    this._recordsPerPage = value;
  }

  get totalRecords(): number {
    return this._totalRecords;
  }

  set totalRecords(value: number) {
    this._totalRecords = value;
  }
}
