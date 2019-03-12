import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName: string;
  usernameCreate: string;
  valid: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCreateUsername() {
    this.valid = true;
    this.usernameCreate = `username ${this.userName} is Created`;
  }

  resetUsername(event: Event) {
    if ((<HTMLInputElement>event.target).value == '') {
      this.valid = false;
      this.usernameCreate = 'No Servers';
    }
  }
  getColor() {
    return this.valid ? 'green' : 'red';
  }
}
