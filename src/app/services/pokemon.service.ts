import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';
import API_ROUTES from './api.routes';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly httpService: HttpClient) { }

  getAllPokemon(limit?: number) {
    return this.httpService.get(API_ROUTES.getAllPokemon(limit)).pipe(pluck('results'));
  }
}
