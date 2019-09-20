import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { HistoryComponent } from './history/history.component';
import { KartComponent } from './kart/kart.component';


@NgModule({
  declarations: [HistoryComponent, KartComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
