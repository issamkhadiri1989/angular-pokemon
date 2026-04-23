import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { WishlistHelper } from '../whishlist/whishlist.service';
import { PokeGridItem } from '../poke-grid-item/poke-grid-item';

@Component({
  selector: 'app-poke-grid',
  imports: [PokeGridItem],
  templateUrl: './poke-grid.html',
  styleUrl: './poke-grid.css',
})
export class PokeGrid {
  currentWhishlist = signal<'water' | 'fire' | 'grass' | 'electric' | 'psychic' | 'normal'>(
    'grass',
  );

  private destroyRef = inject(DestroyRef); // not available in older versions of Angular

  get wishlists(): string[] {
    return Object.keys(this.whishlistHelper.getWhishlists());
  }

  constructor(private readonly whishlistHelper: WishlistHelper) {
    effect((onCleanup) => {
      console.log('🧠 PokeGrid effect(): ', this.currentWhishlist());

      onCleanup(() => {
        console.log('🧠 PokeGrid cleanup(): ');
      });
    });
  }

  removeList(name: string): void {
    this.whishlistHelper.remove(name);
    console.log('🧠 Removing : ', name);
  }

  ngOnInit(): void {
    /* const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.2) {
        this.currentWhishlist.set('water');
      } else if (rnd < 0.4) {
        this.currentWhishlist.set('fire');
      } else if (rnd < 0.6) {
        this.currentWhishlist.set('grass');
      } else if (rnd < 0.8) {
        this.currentWhishlist.set('electric');
      } else if (rnd < 0.9) {
        this.currentWhishlist.set('psychic');
      } else {
        this.currentWhishlist.set('normal');
      }
      console.log('🧠 PokeGrid ngOnInit(): ', this.whishlistHelper.getWhishlists());
      console.log('🧠 PokeGrid ngOnInit(): ', this.currentWhishlist());
    }, 1000); */

    /* this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    }); */
    console.log('🧠 PokeGrid ngOnInit(): ', this.whishlistHelper.getWhishlists());
  }
}
