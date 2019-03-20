import {Component, OnInit} from '@angular/core';
import {AccountsServiceService} from "./services/accounts-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsServiceService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];
  constructor(private accountsService: AccountsServiceService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }


}
