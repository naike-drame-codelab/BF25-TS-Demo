export class Person {
  lname: string;
  private _fname: string;
  get fname() {
    return this._fname;
  }
  set fname(value: string) {
    this._fname = value;
  }

  constructor(lname: string, fname: string) {
    this.lname = lname;
    this.fname = fname;
  }
}
