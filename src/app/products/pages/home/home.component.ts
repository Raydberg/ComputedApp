import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  public navBarItems = [
    {label: "Productos", icon: 'pi pi-home', routerLink: "list-product"},
    {label: "Nuevo Producto", icon: 'pi pi-star', routerLink: "new-product"},
    {label: "Productos", icon: 'pi pi-home', routerLink: ""},
  ]

    // this.items = [
    //   {
    //     label: 'Productos',
    //     icon: 'pi pi-home',
      
    //   },
    //   {
    //     label: 'Features',
    //     icon: 'pi pi-star',
    //   },
    //   {
    //     label: 'Projects',
    //     icon: 'pi pi-search',
    //   },
    //   {
    //     label: 'Contact',
    //     icon: 'pi pi-envelope',
    //   },
    // ];
  
}
