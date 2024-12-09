import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-start',
  templateUrl: './product-start.component.html',
})
export class ProductStartComponent {
  @Input()
  public rating: number = 0;
}
