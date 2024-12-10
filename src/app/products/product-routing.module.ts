import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { ProductComponent } from './pages/product/product.component';
import { FavoriteProductComponent } from './pages/favorite-product/favorite-product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list-products',
        component: ListProductComponent,
      },
      {
        path: '',
        redirectTo: 'list-products',
        pathMatch: 'full',
      },
      {
        path: 'new-product',
        component: NewProductComponent,
      },
      {
        path: 'product/:id',
        component: ProductComponent,
      },
      {
        path: 'favorite-products',
        component: FavoriteProductComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },
      {
        path: '**',
        component: ListProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
