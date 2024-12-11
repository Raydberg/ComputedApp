import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
})
export class ProductImageComponent { 
  @Input()
  public product?:Product

}
