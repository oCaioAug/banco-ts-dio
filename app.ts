import { BonusAccount } from './class/BonusAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Caio', 10);
peopleAccount.deposit(10);
peopleAccount.getBalance();
console.log(peopleAccount.getName());
peopleAccount.withdraw(9);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(10);
companyAccount.getBalance();
companyAccount.getLoan(30);
console.log(companyAccount.getName());
companyAccount.withdraw(30);

const bonusAccount: BonusAccount = new BonusAccount('Bonus', 30);
bonusAccount.deposit(10);
bonusAccount.getBalance();
console.log(bonusAccount.getName());
bonusAccount.withdraw(10);