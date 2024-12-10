import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: Product[] = [];
  private favoritesSubject = new BehaviorSubject<Product[]>([]);
  constructor() {
    this.loadFavorites()
  }

  private loadFavorites(): void {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      this.favorites = JSON.parse(saved);
      this.favoritesSubject.next(this.favorites);
    }
  }
  addFavorites(favorite: Product): void {
    if (!this.favorites.includes(favorite)) {
      this.favorites.push(favorite);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.favoritesSubject.next(this.favorites);
    }
  }
  removeFavorite(favorite: Product): void {
    this.favorites = this.favorites.filter((fav) => fav.id !== favorite.id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.favoritesSubject.next(this.favorites);
  }
  getFavorites(): Observable<Product[]> {
    return this.favoritesSubject.asObservable();
  }
}
