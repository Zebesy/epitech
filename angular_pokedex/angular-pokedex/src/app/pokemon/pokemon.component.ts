import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  mainUrl = 'https://pokeapi.co/api/v2/pokemon/';
  name : any = '';
  id : any = '';
  sprites : any = '';
  type : any ='';
  type2 : any ='';
  speed : any = '';
  sdefense : any = '';
  sattack : any = '';
  defense : any = '';
  attack : any = '';
  hp : any = '';
  height : any = '';
  weight : any = '';
  result;
  pokemonId;
  
    constructor(
      private http: HttpClient,
      private route: ActivatedRoute) { 
  
    }
  
    ngOnInit()  {
      this.getPokemon();
    }
  
    getConfig() {
      this.pokemonId =this.route.snapshot.paramMap.get('pokemonId')
      return this.http.get(this.mainUrl + this.pokemonId);
    }
  
    getPokemon() {
      this.getConfig().subscribe((repApi: any) => {
        this.name = repApi.name;
        this.id = repApi.id;
        this.sprites = repApi.sprites.front_shiny;
        this.type = repApi.types[0].type.name;
        this.height = repApi.height;
        this.weight = repApi.weight;
        this.speed = repApi.stats[0].base_stat;
        this.sdefense = repApi.stats[1].base_stat;
        this.sattack = repApi.stats[2].base_stat;
        this.defense = repApi.stats[3].base_stat;
        this.attack = repApi.stats[4].base_stat;
        this.hp = repApi.stats[5].base_stat;
        this.type2 = repApi.types[1].type.name;
      });
}
}
