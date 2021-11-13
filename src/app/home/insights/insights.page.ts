import { Component, OnInit, ViewChild } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { InsightService } from './insight.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.page.html',
  styleUrls: ['./insights.page.scss'],
})
export class InsightsPage implements OnInit {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  constructor(private insightService: InsightService) { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  ngOnInit() {
  }

  createBarChart() {
    this.insightService.getNetIncomeData()
    .subscribe(data=>{
      this.bars = new Chart(this.barChart.nativeElement, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Gross Income',
            data: data.incomeData,
            backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            borderWidth: 3
          },
          {
            label: 'Expenses',
            data: data.expenseData,
            backgroundColor: 'rgb(255, 0, 0)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(255,0,0)',// array should have same number of elements as number of dataset
            borderWidth: 3
          },
          {
            label: 'Net income',
            data: data.netIncomeData,
            backgroundColor: 'rgb(0, 0, 255)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(0,0,255)',// array should have same number of elements as number of dataset
            borderWidth: 3
          },
        ]
        },
        options: {
          scales: {
            // yAxes: [{
            //   ticks: {
            //     beginAtZero: true
            //   }
            // }]
          }
        }
      });
    },
      err=>{
        console.log(err);
      })
    
  }

}
