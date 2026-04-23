import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistHelper {
  private configuredWishlists: Record<string, string[]> = {};

  constructor() {
    const lists = localStorage.getItem('whish_lists');
    if (lists) {
      this.configuredWishlists = JSON.parse(lists);
    }
  }

  create(listName: string) {
    if (Object.keys(this.configuredWishlists).length > 5) {
      // allow only 6 lists
      return;
    }

    this.configuredWishlists = {
      ...this.configuredWishlists,
      [listName]: [...(this.configuredWishlists[listName] ?? [])],
    };

    this.doPersist();
  }

  remove(name: string) {
    const { [name]: _, ...rest } = this.configuredWishlists;
    console.log('🧠 Removing list: ', rest);
    this.configuredWishlists = rest;

    this.doPersist();
  }

  getWhishlists() {
    return this.configuredWishlists;
  }

  getCount(listName: string): number {
    return this.configuredWishlists[listName]?.length ?? 0;
  }

  hasLists(): boolean {
    return Object.keys(this.configuredWishlists).length > 0;
  }

  private doPersist() {
    localStorage.setItem('whish_lists', JSON.stringify(this.configuredWishlists))!;
  }
}
