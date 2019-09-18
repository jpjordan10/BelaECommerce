import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
