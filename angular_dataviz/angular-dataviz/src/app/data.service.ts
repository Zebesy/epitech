import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

data;

constructor(private http: HttpClient) {
    this.data = this.http.get('assets/data.json');
  }


  getDataViz(){
    return this.data
  }
}
