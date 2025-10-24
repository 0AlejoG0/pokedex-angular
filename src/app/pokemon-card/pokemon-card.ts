import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrls: ['./pokemon-card.scss']
})
export class PokemonCard implements OnChanges {
  @Input() pokemon: any;

  currentImage: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
      // Usa la mejor imagen disponible
      const official = this.pokemon.sprites?.other?.['official-artwork']?.front_default;
      const home = this.pokemon.sprites?.other?.home?.front_default;
      const fallback = this.pokemon.sprites?.front_default;

      this.currentImage = official || home || fallback || '';
    }
  }
}

