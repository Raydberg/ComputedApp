import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { FieldsetModule } from 'primeng/fieldset';
import { RatingModule } from 'primeng/rating';
import { TimelineModule } from 'primeng/timeline';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    BadgeModule,
    DataViewModule,
    TagModule,
    FloatLabelModule,
    ImageModule,
    PanelModule,
    ChipModule,
    FieldsetModule,
    RatingModule,
    AccordionModule,
    TimelineModule,
    AvatarModule
  ],
})
export class NgPrimeModule {}
