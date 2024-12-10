import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Router } from '@angular/router';
import { combineLatest, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public myFavorites: Product[] = [];
  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService, private router: Router) {}

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
  private initializeProducts(): void {
    combineLatest([
      this.productService.getProducts(),
      this.productService.getFavorites(),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([products, favorites]) => {
        this.myFavorites = favorites;
        this.products = this.syncProductsWithFavorites(products, favorites);
      });
  }

  onFavorite(product: Product): void {
    product.isFavorite = !product.isFavorite;

    if (product.isFavorite) {
      this.productService.addFavorites(product);
    } else {
      this.productService.removeFavorite(product);
    }
  }
}
