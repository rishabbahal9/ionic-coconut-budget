import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { NavController } from '@ionic/angular';
import { Transaction } from '../transaction.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.page.html',
  styleUrls: ['./edit-transaction.page.scss'],
})
export class EditTransactionPage implements OnInit {
  isLoading:boolean=true;
  receivedTransactionId:string;
  originalTransaction:Transaction
  transactionForm;
  async ionViewWillEnter()
  {
    this.receivedTransactionId= await this.route.snapshot.params['transactionId'];
    this.originalTransaction= await this.transactionService.getTransaction(this.receivedTransactionId)
    
    
    this.transactionForm= await new FormGroup({
      transactionId: new FormControl(this.originalTransaction.transactionId),
      date: new FormControl(new Date(this.originalTransaction.date).toISOString()),
      earned: new FormControl(this.originalTransaction.earned),
      amount: new FormControl(this.originalTransaction.amount),
      paymentMethod: new FormControl(this.originalTransaction.paymentMethod),
      store: new FormControl(this.originalTransaction.store),
      city: new FormControl(this.originalTransaction.city),
      transactionType: new FormControl(this.originalTransaction.transactionType),
      billAvailable: new FormControl(this.originalTransaction.billAvailable),
      thingsBought: new FormControl(this.originalTransaction.thingsBought),
      comments: new FormControl(this.originalTransaction.comments)
    })
    this.isLoading=false;
  }
  ionViewWillLeave()
  {
    this.transactionForm.reset()
  }


  constructor(
    private transactionService:TransactionService,
    private navCtrl: NavController,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
  }
  onSubmit()
  {
    this.transactionService.updateTransaction(this.originalTransaction,this.transactionForm.value)
    this.transactionForm.reset()
    this.navCtrl.navigateBack("/home/transactions")
  }
}
