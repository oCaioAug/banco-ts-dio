export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){value;
      this.balance += value;
    }
  }

  withdraw = (value: number): void => {
    if (this.balance > value && this.validateStatus()) {
      this.balance -= value;
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
