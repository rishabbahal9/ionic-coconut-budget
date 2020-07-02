import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionsArr:Transaction[]=[
    {
      transactionId: "121877438",
      date: Date.now(),
      earned: "earned",
      amount: 400,
      paymentMethod: "CIBC interact",
      store: "Clic",
      city: "Sherbrooke",
      billAvailable: "Available",
      transactionType: "Earnings",
      comments: "Salary",
      thingsBought: ""
    },
    {
      transactionId: "121876278",
      date: Date.now(),
      earned: "spent",
      amount: 4.57,
      paymentMethod: "CIBC debit card",
      store: "Maxi",
      city: "Sherbrooke",
      billAvailable: "Not available",
      transactionType: "MyGrocery",
      comments: "No comment",
      thingsBought: "Chocolate almonds"
    },
    {
      transactionId: "121876238",
      date: Date.now(),
      earned: "earned",
      amount: 575,
      paymentMethod: "CIBC interact",
      store: "KDC factory",
      city: "Sherbrooke",
      billAvailable: "Available",
      transactionType: "Earnings",
      comments: "Salary",
      thingsBought: ""
    }
  ];

  constructor() { }

  getTransactions():Transaction[]
  {
    return this.transactionsArr
  }
  async getTransaction(transactionId:string)
  {
    return this.transactionsArr.find(tA=>{return tA.transactionId==transactionId})
  }
  deleteTransaction(myTransactionId: string)
  {
    return this.transactionsArr=this.transactionsArr.filter(t=>{return t.transactionId!=myTransactionId});
  }
  createTransaction(receivedTransaction: Transaction)
  {
    return this.transactionsArr.push(receivedTransaction)
  }
  updateTransaction(originalTransaction:Transaction,receivedTransaction: Transaction)
  {
    let index=this.transactionsArr.indexOf(originalTransaction)
    if(index!=-1)
    {
      this.transactionsArr[index]=receivedTransaction
      return "Success"
    }
    return "Fail"
  }

}
