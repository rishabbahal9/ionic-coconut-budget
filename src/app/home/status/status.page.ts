import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  dateObj:number= this.stateService.getDate();
  status:any;
  status2:any;
  status3:any;
  showTable:boolean=false;
  constructor(
    private statusService: StatusService,
    private loadingCtrl:LoadingController,
    private stateService:StateService
    ) { }

  ngOnInit() {
  }

  getMonthlyStatus() {
    this.loadingCtrl.create(
      {
        keyboardClose: true,
        message:"Loading...",
        spinner: "lines"
      })
      .then(loadingEl=>{
        loadingEl.present()
        this.statusService.getStatus(this.stateService.getDate())
        .subscribe(
          data=>{
            this.status=data.status
            this.status2=data.status2
            this.status3=data.status3
            this.showTable=true;
            loadingEl.dismiss()
          }
        )
      })
  }
  ionViewWillEnter()
  {
    this.dateObj= this.stateService.getDate();
    this.getMonthlyStatus()
  }

  changeDate(event:any)
  {
    this.stateService.updateDate(Date.parse(event.target.value))
    this.dateObj=this.stateService.getDate()
    this.getMonthlyStatus()
  }

}
