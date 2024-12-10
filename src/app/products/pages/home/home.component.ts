import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public navBarItems = [
    { label: 'Productos', icon: 'pi pi-home', routerLink: 'list-product' },
    { label: 'Nuevo Producto', icon: 'pi pi-star', routerLink: 'new-product' },
    { label: 'Favoritos', icon: 'pi pi-heart', routerLink: 'favorite-products' },
  ];
}
