import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<any>('default message');
  receivedData = this.data.asObservable();

  constructor() { }

  changedData(message: any){
    this.data.next(message);
   console.log(message);
  }
}
