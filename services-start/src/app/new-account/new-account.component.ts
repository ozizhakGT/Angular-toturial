import { Component } from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountsServiceService} from "../services/accounts-service.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountsServiceService) {
    this.accountService.statusUpdated.subscribe((status:string) => alert('status is update to ' + status))
  };

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
