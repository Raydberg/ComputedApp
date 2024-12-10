import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingItem: Product[] = [];
  private shoppingSubject = new BehaviorSubject<Product[]>([]);
  constructor() {
    this.loadShopping();
  }

  private loadShopping(): void {
    const saved = localStorage.getItem('shopping-items');
    if (saved) {
      this.shoppingItem = JSON.parse(saved);
      this.shoppingSubject.next(this.shoppingItem);
    }
  }

  getShoppingItems(): Observable<Product[]> {
    return this.shoppingSubject.asObservable();
  }

  addShoppingItems(product: Product): void {
    const existingProduct = this.shoppingItem.find(item => item.id === product.id);
    if (!existingProduct) {
      this.shoppingItem.push(product);
      localStorage.setItem('shopping-items', JSON.stringify(this.shoppingItem));
      this.shoppingSubject.next(this.shoppingItem);
    }
  }
  removeShoppingItems(product: Product): void {
    this.shoppingItem = this.shoppingItem.filter(
      (item) => item.id !== product.id
    );
    localStorage.setItem('shopping-items', JSON.stringify(this.shoppingItem));
    this.shoppingSubject.next(this.shoppingItem);
  }
}
