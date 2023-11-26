import { Component } from '@angular/core';
import { WebService } from './web.service';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'pokemon-detailed-view',
  templateUrl: './pokemon-detailed-view.component.html',
  styleUrls: ['./pokemon-detailed-view.component.css']
})
export class PokemonDetailedComponent {
  pokemon_list: any = [];

  constructor(public webService: WebService, public pokemonService: PokemonService) { }

  ngOnInit() {
    
  }

  fetchPokemon() {
    };
  
}
