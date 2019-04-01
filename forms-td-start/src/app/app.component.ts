import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  @ViewChild('answer') answerReplay: HTMLInputElement;
  genders: string[] = ["Male", "Female"];
  subbmited: boolean = false;
  user = {
    username: '',
    email: '',
    secret: '',
    qAnswer: '',
    gender: ''
};

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({username: suggestedName})
  }

  onSubmit() {
      this.subbmited = true;
      this.user.username = this.signUpForm.value.username;
      this.user.email = this.signUpForm.value.email;
      this.user.secret = this.signUpForm.value.secret;
      this.user.qAnswer= this.signUpForm.value.qAnswer;
      this.user.gender= this.signUpForm.value.gender;

      this.signUpForm.reset();
  }
}
