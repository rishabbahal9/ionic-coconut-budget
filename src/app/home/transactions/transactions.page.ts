import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';

import { Transaction } from './transaction.model';
import { TransactionService } from './transaction.service';
import { StateService } from './../state.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  dateHeading=this.stateService.getDate();
  transactionsArr:Transaction[];
  x:any="hello";
  constructor(
    private router:Router,
    private alertCtrl:AlertController,
    private tranService:TransactionService,
    private stateService:StateService,
    private loadingCtrl:LoadingController,

  ) { }

  ngOnInit() {
  }

  getMonthYearTransactions(dateObj) {
    //Creating loader
    this.loadingCtrl.create({
      keyboardClose: true,
      message:"Loading...",
      spinner: "lines"
    })
    .then(loadingEl=>{
      loadingEl.present()
      //Getting transactions
      this.tranService.getTransactions(dateObj)
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
  ionViewWillEnter()
  {
    this.getMonthYearTransactions(this.stateService.getDate())
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
                  this.getMonthYearTransactions(this.stateService.getDate())
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

  changeDate(event:any)
  {
    this.stateService.updateDate(Date.parse(event.target.value))
    this.getMonthYearTransactions(this.stateService.getDate())
    this.dateHeading=this.stateService.getDate()
  }
}
