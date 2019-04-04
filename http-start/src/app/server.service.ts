import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) {
  }

  storeServers(servers) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Oz-Test': 'Test-Header'
    })
    // return this.http.post('https://udemy2-1de2b.firebaseio.com/data.json',
    //   servers, {headers: headers});
    return this.http.put('https://udemy2-1de2b.firebaseio.com/data.json',
      servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://udemy2-1de2b.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => Observable.throwError('something went wrong'))

  }

  getApp() {
    return this.http.get('https://udemy2-1de2b.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
  }
}
