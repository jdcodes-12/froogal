import { FinancialInfo } from './financial-info-model';
import { ReceiptCollection } from './receipt-collection-model';
import { ExpenseCollection } from './expense-collection-model';
import { CategoryCollection } from './category-collection-model';

/* 
Variables & methods prepended with `_` are meant to be kept private.
They should only be used within the class.
*/

export class User {
  constructor(firstName, lastName, id) {
    this._id = id;                  // requried
    this._email = '';               // required
    this._password = '';            // required
    this._firstName = firstName;    // required
    this._lastName = lastName;      // required 
    this._financialInfo = null;     // required
    this._receiptCollection = null;
    this._expenseCollection = null;
    this._categoryCollection = null;
  }

  /*
    -- Getters -- 
    getId() : number
    getEmail() : string
    getPassword() : string
    getFirstName() : string
    getLastName() : string
    getFinancialInfo : FinancialInfo
    getReceiptCollection : ReceiptCollection
    getExpenseCollection: ExpenseCollection
    getCategoryCollection : CategoryCollection

    -- Setters -- 
    setEmail(email: string) : void
    setPassword(password: string) : void
    setFirstName(name: string) : void
    setLastName(name: string) : void

    -- Utilities --
    toString() : void // maybe?
  */
}