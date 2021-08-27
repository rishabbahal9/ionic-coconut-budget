import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private theDate;

  constructor() { 
    this.theDate=Date.now();
  }

  getDate() {
    return this.theDate;
  }

  updateDate(dateObj) {
    this.theDate=dateObj;
  }
}
