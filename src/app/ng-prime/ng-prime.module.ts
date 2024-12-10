import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    BadgeModule,
    DataViewModule,
    TagModule,
  ],
})
export class NgPrimeModule {}
