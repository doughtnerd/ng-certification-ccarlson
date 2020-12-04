import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ResponsiveCardGridListComponent } from './responsive-card-grid-list/responsive-card-grid-list.component';


@NgModule({
  declarations: [
    CardComponent,
    ResponsiveCardGridListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [CardComponent, ResponsiveCardGridListComponent]
})
export class SharedModule { }
