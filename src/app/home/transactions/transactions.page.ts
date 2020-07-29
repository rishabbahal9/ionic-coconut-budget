import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';

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
  x:any="hello";
  constructor(
    private router:Router,
    private alertCtrl:AlertController,
    private tranService:TransactionService,
    private loadingCtrl:LoadingController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    //Creating loader
    this.loadingCtrl.create({
      keyboardClose: true,
      message:"Loading...",
      spinner: "lines"
    })
    .then(loadingEl=>{
      loadingEl.present()
      //Getting transactions
      this.tranService.getTransactions()
      .subscribe(
        (data)=>{
          this.x=data
          this.transactionsArr=data.transaction
          this.transactionsArr.reverse()
          loadingEl.dismiss()
        }
      )
    })
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
            .subscribe(
              data=>{
                if(data.transactionDeleted)
                {
                  //Creating loader
                  this.loadingCtrl.create({
                    keyboardClose: true,
                    message:"Loading...",
                    spinner: "lines"
                  })
                  .then(loadingEl=>{
                    loadingEl.present()
                    //Getting transactions
                    this.tranService.getTransactions()
                    .subscribe(
                      (data)=>{
                        this.x=data
                        this.transactionsArr=data.transaction
                        this.transactionsArr.reverse()
                        loadingEl.dismiss()
                      }
                    )
                  })
                }
              },
              err=>{console.log(err)}
            )
          }
        }
      ]
    }).then((alertEl)=>{
        alertEl.present()
    })
  }
}
