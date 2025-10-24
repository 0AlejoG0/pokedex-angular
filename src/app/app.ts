import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonSearchComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App { }
