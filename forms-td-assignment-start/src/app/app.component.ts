import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../shared/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typeUserArray:string[] = ['Basic', 'Advanced', 'Pro'];
  selectedTypeUser:string = this.typeUserArray[1];
  valid: boolean = false;
  users: User[] = [];
  user: User = {
    email: '',
    userType: '',
    password: ''
};

  onDelete(index) {
    this.users.splice(index, 1).slice()
  }

  onSubmit(form: NgForm) {
    this.valid = true;
    this.user.email = form.value.email;
    this.user.userType = form.value.typeUser;
    this.user.password = form.value.password;
    this.users.push(this.user);
    this.user = {
      email: '',
      userType: '',
      password: ''
    };
    console.log(this.users);
    form.reset()
    form.form.patchValue({typeUser: this.selectedTypeUser});
  }
}
