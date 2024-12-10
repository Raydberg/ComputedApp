import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public cartItemsCount: string = '0';
  public navBarItems: MenuItem[] = [
    { label: 'Productos', icon: 'pi pi-home', routerLink: 'list-product' },
    { label: 'Nuevo Producto', icon: 'pi pi-star', routerLink: 'new-product' },
    {
      label: 'Favoritos',
      icon: 'pi pi-heart',
      routerLink: 'favorite-products',
    },
    {
      label: 'Shopping',
      routerLink: 'shopping-cart',
      icon: 'pi pi-shopping-cart',
      badge: this.cartItemsCount,
      badgeStyleClass: 'p-badge-danger'
    },
  ];
  
  constructor(private shoppingService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingService.getShoppingItems().subscribe((items) => {
      if (items.length > 0) {
        this.cartItemsCount = items.length.toString();
        this.updateShoppingBadge();
      }
    });
  }

  private updateShoppingBadge(): void {
    const shoppingItem = this.navBarItems.find(item => item.routerLink === 'shopping-cart');
    if (shoppingItem) {
      shoppingItem.badge = this.cartItemsCount;
      shoppingItem.badgeStyleClass = 'p-badge-danger';
    }
  }
}