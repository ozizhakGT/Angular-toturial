import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
  counterActivesLog: number = 0;
  counterInactivesLog: number = 0;


  onCount(type: string){
    if (type == 'active') {
      return 'Active log numbers: ' + ++this.counterActivesLog;
    } else {
      return 'Inactive log numbers: ' + ++this.counterInactivesLog;
    }
  }
}
