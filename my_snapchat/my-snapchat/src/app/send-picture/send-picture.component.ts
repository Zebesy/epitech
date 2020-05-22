import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-send-picture',
  templateUrl: './send-picture.component.html',
  styleUrls: ['./send-picture.component.css']
})

export class SendPictureComponent implements OnInit {
url : string = 'https://api-snapchat-fev-codac-paris.herokuapp.com/all';
urlSnap : string = 'https://api-snapchat-fev-codac-paris.herokuapp.com/snap';
token = JSON.parse(localStorage.getItem('token'));
httpOptions = {
    headers: new HttpHeaders ({
    'token': this.token
  })
}

httpOptionsnap = {
  "Content-Type": "multipart/form-data",
  'token': this.token
}

results;
isShow = false;
selectedFile : File;
selectedMail : string;
selectedDuration : string;
user :string;
duration : string;
body;
// formData = new FormData();

constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
    console.log(this.token)
  }

  onSubmit() {
    this.isShow = true;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  setUser(user: any): void {
    console.log(user);
    this.user = user;
    }

  onSend() {
    this.user = this.selectedMail;
    this.duration = this.selectedDuration;
    this.body = {
      "duration" : Number(this.selectedDuration),
      "to" : this.selectedMail,
      "image" : this.selectedFile
    }
    // this.formData.append("duration" , this.selectedDuration);
    // this.formData.append("to" , this.selectedMail);
    // this.formData.append("image" , this.selectedFile);
    console.log(this.selectedFile)

    this.http.post<any>(this.urlSnap, this.body, { headers : this.httpOptionsnap}).subscribe(data =>{
      console.log(data);
    });
    // console.log(this.user);
    // console.log(this.duration)
  }

  getConfig() {
    return this.http.get(this.url, this.httpOptions);
  }

  getData() {
    this.getConfig().subscribe((repApi: any) => {
      this.results = [];
      this.results = repApi.data;
      this.results.forEach(element => {
        console.log(element)
      }); 
    })

}
}

