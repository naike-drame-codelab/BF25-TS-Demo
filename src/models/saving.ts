import { Account } from "./account";

export class Saving extends Account {
  dateLastWithdraw: Date | null;

  withdraw(amount: number): void {
    // super == base en C#
    super.withdraw(amount);
    this.dateLastWithdraw = new Date();
  }
}
