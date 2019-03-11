import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversStatus:string = 'no Servers';
  num:number = 0;
  serverName = '';

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.num++;
    this.serversStatus = `added ${this.num} Servers.`
  }

  onEvent(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
