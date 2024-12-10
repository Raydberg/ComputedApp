import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './product-routing.module';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteProductComponent } from './pages/favorite-product/favorite-product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListProductComponent,
    NewProductComponent,
    FavoriteProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    RouterModule,
    ProductsRoutingModule,
    SharedModule,
  ],
})
export class ProductsModule {}
