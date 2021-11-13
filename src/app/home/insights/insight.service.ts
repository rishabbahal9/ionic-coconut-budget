import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsightService {

  backendUrl:String=environment.backendUrl
  constructor(
    private http:HttpClient,
  ) { }

  getNetIncomeData()
  {
    return this.http.get<{incomeData: any,expenseData: any,netIncomeData: any}>(`${this.backendUrl}/insights/net-income`)
  }
}
