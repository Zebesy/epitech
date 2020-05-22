import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  url: string = 'https://api-snapchat-fev-codac-paris.herokuapp.com/inscription';
  email= '';
  password = '';
  account; 
  header= {
    'Content-Type': 'application/json'
  }

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
    console.log(data);
})
  }

  onKey(event: any) { // without type info
    this.email = event.target.value;
    }

  onKey2(event: any) { // without type info
    this.password = event.target.value;
  }
}
