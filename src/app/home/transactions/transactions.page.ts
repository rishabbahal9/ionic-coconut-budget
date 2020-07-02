import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';

import { Transaction } from './transaction.model';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  dateObject=Date.now()
  transactionsArr:Transaction[];
  constructor(
    private router:Router,
    private alertCtrl:AlertController,
    private tranService:TransactionService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    this.transactionsArr=this.tranService.getTransactions()
  }

  editTransactionMethod(transactionSlider:IonItemSliding,transactionId:string)
  {
    this.router.navigateByUrl(`/home/transactions/edit-transaction/${transactionId}`)
    transactionSlider.close()
  }
  deleteTransactionMethod(transactionSlider:IonItemSliding,transactionId:string)
  {
    transactionSlider.close()
    this.alertCtrl.create({
      header:"Are you sure you want to delete?",
      message: "This action is irreversible. Are you sure you want to delete this transaction? If yes press delete otherwise cancel.",
      buttons: [
        {
          text: "Cancel",
          role: "Cancel"
        },
        {
          text: "Delete",
          handler:()=>{
            this.tranService.deleteTransaction(transactionId)
            setTimeout(()=>{this.transactionsArr=this.tranService.getTransactions()},100)
          }
        }
      ]
    }).then((alertEl)=>{
        alertEl.present()
    })
  }
}
