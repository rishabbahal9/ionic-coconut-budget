import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.page.html',
  styleUrls: ['./new-transaction.page.scss'],
})
export class NewTransactionPage implements OnInit {

  transactionForm=new FormGroup({
    transactionId: new FormControl(Math.round(Date.now()+Math.random()*1000).toString()),
    date: new FormControl(''),
    earned: new FormControl("earned"),
    amount: new FormControl(0),
    paymentMethod: new FormControl(""),
    store: new FormControl(""),
    city: new FormControl("Sherbrooke"),
    transactionType: new FormControl(""),
    billAvailable: new FormControl("Available"),
    thingsBought: new FormControl(),
    comments: new FormControl()
  })

  constructor(
    private transactionService: TransactionService,
    private navCtrl:NavController
    ) { }

  ngOnInit() {
  }
  onSubmit()
  {
    this.transactionService.createTransaction(this.transactionForm.value)
    .subscribe(
      (data)=>{
        // console.log(data)
      },
      (error)=>{console.log(error)}
    )
    this.transactionForm.reset()
    this.navCtrl.navigateBack("/home/transactions")
  }
}
