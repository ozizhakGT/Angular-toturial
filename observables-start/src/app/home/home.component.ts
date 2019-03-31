import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription, interval} from "rxjs";
import 'rxjs/Rx';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customsObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const myNumber = Observable.interval(1000)
      .pipe(map(
        (data:number) => data * 2
      ))
    this.numbersObsSubscription = myNumber.subscribe((num:number) => {console.log(num)});


    const myObservable = Observable.create((observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package')
        }, 2000);
        setTimeout(() => {
          observer.complete()
        }, 4000);
        setTimeout(() => {
          observer.error('erorr , not work')
        }, 5000);
        setTimeout(() => {
          observer.error('erorr , not work')
        }, 5000);
      }
    );
    this.customsObsSubscription = myObservable.subscribe(
      (data: string) => {console.log(data)},
      (error: string) => {console.log(error)},
      () => {console.log('completed')},
    )
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customsObsSubscription.unsubscribe();
  }
}
