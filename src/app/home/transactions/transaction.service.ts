import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http:HttpClient) { }

  getTransactions()
  {
    return this.http.get<{transaction:Array<Transaction>}>('http://localhost:3001/currentMonthTransactions')
  }
  getTransaction(transactionId:string)
  {
    // return this.transactionsArr.find(tA=>{return tA.transactionId==transactionId})
    return this.http.get<{transaction:Transaction}>(`http://localhost:3001/getTransaction/${transactionId}`)
  }
  deleteTransaction(myTransactionId: string)
  {
    return this.http.post<{transactionDeleted: Boolean}>('http://localhost:3001/deleteTransaction',{transactionId: myTransactionId})
  }
  createTransaction(receivedTransaction: Transaction)
  {
    return this.http.post('http://localhost:3001/postNewTransactions',receivedTransaction)
  }
  updateTransaction(originalTransaction:Transaction,receivedTransaction: Transaction)
  {
    return this.http.post<{status: String}>('http://localhost:3001/updateTransaction',receivedTransaction)
  }
}
