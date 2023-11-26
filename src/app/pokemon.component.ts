import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemonList$!: Observable<any>;
  page: number = 1;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
    if (sessionStorage['page']) { this.page = Number(sessionStorage['page']); }
    this.fetchPokemon();
  }

  fetchPokemon() {
    this.pokemonList$ = this.pokemonService.getPokemon(this.page);
    };
  

  previousPage() {
    if (this.page != 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.page--;
      sessionStorage['page'] = this.page;
      this.fetchPokemon();
    }
  }

  nextPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.page += 1;
    sessionStorage['page'] = this.page;
    this.fetchPokemon();
  }
}
