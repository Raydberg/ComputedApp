import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  public shoppingItems?: Product[];
  constructor(private shoppingService: ShoppingCartService) {}
  ngOnInit(): void {
    this.shoppingService.getShoppingItems().subscribe((product) => {
      this.shoppingItems = product;
      console.log('Productos traidos', this.shoppingItems);
    });
  }
}
