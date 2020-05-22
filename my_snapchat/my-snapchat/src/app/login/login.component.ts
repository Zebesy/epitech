import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  url: string = 'https://api-snapchat-fev-codac-paris.herokuapp.com/connection';
  email= '';
  password = '';
  account; 
  header= {
    'Content-Type': 'application/json'
  }
  token;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.account = { 
      "email" : this.email,
      "password" : this.password
    }
    console.log(this.account);
    this.http.post<any>(this.url, this.account, { headers: this.header }).subscribe(data => {
    this.token = JSON.stringify(data.data.token);
    localStorage.setItem('token', this.token);
    console.log(this.token);
    })
  }

  onKey(event: any) { // without type info
    this.email = event.target.value;
    }

  onKey2(event: any) { // without type info
    this.password = event.target.value;
  }
}