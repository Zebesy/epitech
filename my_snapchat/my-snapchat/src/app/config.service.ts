import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url : string = 'https://api-snapchat-fev-codac-paris.herokuapp.com/all';
  results;

  constructor(private http: HttpClient) { }

  // getConfig() {
  //   return this.http.get(this.url);
  // }
}

// export interface Config {
//   results : any;
// }
