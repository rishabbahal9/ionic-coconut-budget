import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  dateObj:number= Date.now()
  status:any;
  showTable:boolean=false;
  constructor(
    private statusService: StatusService,
    private loadingCtrl:LoadingController
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    this.loadingCtrl.create(
      {
        keyboardClose: true,
        message:"Loading...",
        spinner: "lines"
      })
      .then(loadingEl=>{
        loadingEl.present()
        this.statusService.getStatus()
        .subscribe(
          data=>{
            this.status=data.status
            this.showTable=true;
            loadingEl.dismiss()
          }
        )
      })
  }

}
