import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pokemons: any;

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon(5000).subscribe(data => this.pokemons = data);
  }

}
