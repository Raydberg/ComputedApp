import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Router } from '@angular/router';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { FavoriteService } from '../../services/favorite.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public myFavorites: Product[] = [];
  public shoppingItems: Product[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private router: Router,
    private favoriteService: FavoriteService,
    private shoppingService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.initializeProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  private syncProductsWithFavorites(
    products: Product[],
    favorites: Product[]
  ): Product[] {
    return products.map((product) => ({
      ...product,
      isFavorite: favorites.some((fav) => fav.id === product.id),
    }));
  }
  private syncProductWithShopping(
    product: Product[],
    shoppingItems: Product[]
  ): Product[] {
    return product.map((product) => ({
      ...product,
      isShopping: shoppingItems.some((item) => item.id === product.id),
    }));
  }
  
  private initializeProducts(): void {
    combineLatest([
      this.productService.getProducts(),
      this.favoriteService.getFavorites(),
      this.shoppingService.getShoppingItems()
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([products, favorites, shoppingItems]) => {
        const productsWithFavorites = this.syncProductsWithFavorites(products, favorites);
        this.products = this.syncProductWithShopping(productsWithFavorites, shoppingItems);
        this.myFavorites = favorites;
        this.shoppingItems = shoppingItems;
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
