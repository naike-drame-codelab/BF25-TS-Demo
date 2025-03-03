import { Person } from "./person";

export abstract class Account {
  // number: string;
  // titular: Person;
  private _balance: number;

  constructor(public number: string, public titular: Person) {
    // this.number = number;
    // this.titular = titular;
  }

  withdraw(amount: number) {
    if (this._balance - amount < 0) {
      throw new Error("Le montant doit être inférieur au solde disponible.");
    }
    this._balance -= amount;
  }

  deposit(amount: number) {
    this._balance += amount;
  }
}
