import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private backendUrl:String=environment.backendUrl
  // private transactionsArr:Transaction[]=[
  //   {
  //     transactionId: "121877438",
  //     date: Date.now(),
  //     earned: "earned",
  //     amount: 400,
  //     paymentMethod: "CIBC interact",
  //     store: "Clic",
  //     city: "Sherbrooke",
  //     billAvailable: "Available",
  //     transactionType: "Earnings",
  //     comments: "Salary",
  //     thingsBought: ""
  //   },
  //   {
  //     transactionId: "121876278",
  //     date: Date.now(),
  //     earned: "spent",
  //     amount: 4.57,
  //     paymentMethod: "CIBC debit card",
  //     store: "Maxi",
  //     city: "Sherbrooke",
  //     billAvailable: "Not available",
  //     transactionType: "MyGrocery",
  //     comments: "No comment",
  //     thingsBought: "Chocolate almonds"
  //   },
  //   {
  //     transactionId: "121876238",
  //     date: Date.now(),
  //     earned: "earned",
  //     amount: 575,
  //     paymentMethod: "CIBC interact",
  //     store: "KDC factory",
  //     city: "Sherbrooke",
  //     billAvailable: "Available",
  //     transactionType: "Earnings",
  //     comments: "Salary",
  //     thingsBought: ""
  //   }
  // ];

  constructor(private http:HttpClient) { }

  getTransactions(dateObj)
  {
    return this.http.get<{transaction:Array<Transaction>}>(`${this.backendUrl}/getMonthlyTransactions/${dateObj}`)
  }
  getTransaction(transactionId:string)
  {
    // return this.transactionsArr.find(tA=>{return tA.transactionId==transactionId})
    return this.http.get<{transaction:Transaction}>(`${this.backendUrl}/getTransaction/${transactionId}`)
  }
  deleteTransaction(myTransactionId: string)
  {
    return this.http.post<{transactionDeleted: Boolean}>(`${this.backendUrl}/deleteTransaction`,{transactionId: myTransactionId})
  }
  createTransaction(receivedTransaction: Transaction)
  {
    return this.http.post(`${this.backendUrl}/postNewTransactions`,receivedTransaction)
  }
  updateTransaction(originalTransaction:Transaction,receivedTransaction: Transaction)
  {
    return this.http.post<{status: String}>(`${this.backendUrl}/updateTransaction`,receivedTransaction)
  }
}
