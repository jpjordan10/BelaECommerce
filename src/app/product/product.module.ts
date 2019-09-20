import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './list/card/card.component';
import { TableComponent } from './list/table/table.component';

@NgModule({
  declarations: [ListComponent, CardComponent, TableComponent],
  imports: [CommonModule, ProductRoutingModule, HttpClientModule],
  providers: [ProductService]
})
export class ProductModule {}
