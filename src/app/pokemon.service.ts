import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonColour, getTypeColour } from './pokemon-enums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon_list: any;
  constructor(private http: HttpClient) {}


  
  getPokemon(page: number) : Observable<any> {
    return this.http.get('http://localhost:5000/api/v1.0/pokemon?pn='+page)
    };


  getOnePokemon(id: string) {
    return this.http.get('http://localhost:5000/api/v1.0/pokemon/' + id)

    }
  

  getPokemonTypeImageUrl(type: string): string {
    return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`;
  }

  getPokemonBackgroundColour(type: string): string {
    return getTypeColour(type as keyof typeof PokemonColour);
  }

  getPokemonImageSource(pokemonId: number): string {
    const isShiny = Math.random() < 0.1;
    const basePath = isShiny
      ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    return `${basePath}${pokemonId}.png`;
  }
}
