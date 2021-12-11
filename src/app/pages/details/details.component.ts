import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pokemon!: Pokemon;
  private set pokemonName(name: string) {
    this.pokemonService.getPokemon(name).subscribe(data => this.pokemon = data);
  }

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.pokemonName = params['pokemonName'])
  }

}
