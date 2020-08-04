import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  backendUrl:String=environment.backendUrl
  constructor(private http:HttpClient) { }

  getStatus()
  {
    return this.http.get<{status: any,status2: any,status3: any}>(`${this.backendUrl}/status/getStatus`)
  }
}
