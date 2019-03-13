import {Component} from '@angular/core';
import User from '../user-structre'

@Component({
  selector: 'app-user-detalis',
  templateUrl: './user-detalis.component.html',
  styleUrls: ['./user-detalis.component.css']
})
export class UserDetalisComponent {
  changeColor: boolean = false;
  logNumber: number = 0;
  dataStructre: User = {
    id: 0,
    fullName: '',
    email: '',
    password: ''
  };
  userArr = [];

  onSave(data) {
    this.logNumber++;
    data.id = this.userArr.length + 1;
    this.userArr.push(data);
    //Reset data Structre
    this.dataStructre = {
      id: 0,
      fullName: '',
      email: '',
      password: ''
    };
    console.log(this.userArr);
  }

}
