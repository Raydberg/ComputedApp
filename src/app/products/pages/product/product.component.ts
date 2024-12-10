import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  public product?: Product;
  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(switchMap(({ id }) => this.productService.getProductById(id)))
      .subscribe((product) => {
        if (!product) return this.router.navigate(['/list-products']);
        this.product = product;
        return;
      });
  }
}
