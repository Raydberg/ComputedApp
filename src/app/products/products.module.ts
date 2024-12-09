import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './product-routing.module';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ListProductComponent,NewProductComponent],
  imports: [CommonModule, NgPrimeModule, RouterModule, ProductsRoutingModule,SharedModule],
})
export class ProductsModule {}
