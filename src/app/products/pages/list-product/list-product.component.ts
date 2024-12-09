import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  public products: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((product) => (this.products = product));
  }
}
