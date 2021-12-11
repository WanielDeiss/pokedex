import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import API_ROUTES from './api.routes';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly httpService: HttpClient) { }

  getAllPokemon(limit?: number) {
    return this.httpService.get(API_ROUTES.getAllPokemon(limit)).pipe(pluck('results'));
  }

  getPokemon(name: string) {
    return this.httpService.get<Pokemon>(API_ROUTES.getPokemon(name))
  }
}
