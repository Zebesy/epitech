import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
mainUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=807';
results : any = [];
term;

  constructor(private http: HttpClient) { 

  }

  ngOnInit()  {
    this.getPokemon();
  }

  onClick(){
  }

  getConfig() {
    return this.http.get(this.mainUrl);
  }

  getPokemon() {
    this.getConfig().subscribe((repApi: any) => {
      this.results = [];
      this.results = repApi.results;
      this.results.forEach(element => {
        console.log(element)
      });
      for (let i = 0; i < 807; i++) {
        this.results[i].id = i+1;
      }
      console.log(this.results);
    })
}

}
