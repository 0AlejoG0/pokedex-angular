import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonCard } from '../../pokemon-card/pokemon-card';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonCard, HttpClientModule],
  templateUrl: './pokemon-search.html',
  styleUrls: ['./pokemon-search.scss'],
})
export class PokemonSearchComponent {
  clear() {
    throw new Error('Method not implemented.');
  }
  searchTerm = '';
  pokemon: any = null;
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.error = 'Por favor ingresa un nombre o número de Pokémon.';
      this.pokemon = null;
      return;
    }

    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.searchTerm.toLowerCase()}`).subscribe({
      next: (data) => {
        console.log('✅ Pokémon encontrado:', data);
        this.pokemon = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Error buscando Pokémon:', err);
        this.error = 'Pokémon no encontrado 😢';
        this.loading = false;
      },
    });
  }
}
