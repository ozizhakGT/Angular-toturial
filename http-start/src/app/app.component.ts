import {Component, OnInit} from '@angular/core';
import {ServerService} from "./server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  valid:string = 'Loading';
  appName;
  servers = [];

  constructor(private apiServer: ServerService) {}

  ngOnInit() {
   this.appName = this.apiServer.getApp()
   this.onGetServers();

  }

onSubmit() {
    this.apiServer.storeServers(this.servers).subscribe(
      (response) => {
        if (response.status === 200) {
          this.valid = 'data sent!';
        }
      },
      (error) => {
        this.valid = 'data dod not sent!'
      }
    )
}

onGetServers() {
    this.apiServer.getServers().subscribe(
      (servers: any[]) => {
        this.valid ='';
        console.log(servers)
        this.servers = servers;
      },
      error1 => this.valid = error1
    );
}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
    this.onSubmit();
  }
  private generateId() {
    return Math.round(  Math.random() * 10000);
  }
}
