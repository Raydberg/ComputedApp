import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { FavoriteService } from '../../services/favorite.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
})
export class FavoriteProductComponent implements OnInit {
  public myFavorites?: Product[];
  constructor(
    private router: Router,
    private favoriteService: FavoriteService,
    private shoppingService: ShoppingCartService
  ) {}
  ngOnInit(): void {
    this.favoriteService.getFavorites().subscribe((favorite) => {
      this.myFavorites = favorite;
      console.log(this.myFavorites);
    });
  }
  onFavorite(product: Product): void {
    product.isFavorite = !product.isFavorite;
    if (product.isFavorite) {
      this.favoriteService.addFavorites(product);
    } else {
      this.favoriteService.removeFavorite(product);
    }
  }
  onShopping(product: Product): void {
    product.isShopping = !product.isShopping;
    if (product.isShopping) {
      this.shoppingService.addShoppingItems(product);
    } else {
      this.shoppingService.removeShoppingItems(product);
    }
  }
}
