import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStartComponent } from './product-start/product-start.component';

@NgModule({
  declarations: [ProductStartComponent],
  imports: [CommonModule],
  exports: [ProductStartComponent],
})
export class SharedModule {}
