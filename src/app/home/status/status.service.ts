import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http:HttpClient) { }

  getStatus()
  {
    return this.http.get<{status: any,status2: any,status3: any}>('http://localhost:3001/status/getStatus')
  }
}
