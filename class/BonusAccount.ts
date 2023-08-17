import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount{
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public deposit = (value: number) => {
    this.balance += value + 10;
  }
}