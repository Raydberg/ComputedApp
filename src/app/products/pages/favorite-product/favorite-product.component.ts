import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
})
export class FavoriteProductComponent implements OnInit {
  @Input()
  public myFavorites?: Product[];
  constructor(private router: Router, private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getFavorites().subscribe((favorite) => {
      this.myFavorites = favorite;
      console.log(this.myFavorites);
    });
  }
}
