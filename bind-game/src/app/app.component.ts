import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumberArr: number[] = [];
  evenNumberArr: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumberArr.push(firedNumber);
    } else {
      this.oddNumberArr.push(firedNumber);
    }
  }
}
