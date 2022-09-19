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

  // Getters
  getId() {
    return this._id;
  }

  getEmail() {
    return this._email;
  }

  getPassword() { 
    return this._password;
  }

  getFirstName() { 
    return this._firstName;
  }

  getLastName() { 
    return this._lastName;
  }

  getFinancialInfo() { 
    return this._financialInfo;
  }

  getReceiptCollection() { 
    return this._receiptCollection;
  }

  getExpenseCollection() { 
    return this._expenseCollection;
  }
  getCategoryCollection() { 
    return this._receiptCollection;
  }
  
  // Setters
  setEmail(email) { 
    this._email = email;
  }

  setPassword(password) { 
    this._password = password;
  }

  setFirstName(firstName) {
    this._firstName = firstName;
  }

  setLastName(lastName) { 
    this._lastName = lastName;
  }

  /*
    -- Utiltiies --
    createReceiptCollection() : ReceiptCollection
    createExpenseCollection() : ExpenseCollection
    createCategoryCollection() : CategoryCollection
  */
}