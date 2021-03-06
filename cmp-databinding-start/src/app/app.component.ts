import {Component, OnDestroy} from '@angular/core';
import {SeverElement} from "./severElement";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  serverElements: SeverElement[] = [];
  srvCounter: number = this.serverElements.length;

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!s')
  }
  onDestroyClicked() {
    this.serverElements.splice(0,1);
    this.srvCounter = this.srvCounter === 0 ? 0 : --this.srvCounter;
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    this.srvCounter++
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    this.srvCounter++
  }

}
