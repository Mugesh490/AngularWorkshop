import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  message=new BehaviorSubject("");
  currentMessage=this.message.asObservable();

  changeMessage=(message:any)=>{
    this.message.next(message);
  }
}
