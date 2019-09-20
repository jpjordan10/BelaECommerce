import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BarService } from './services/bar.service';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, CoreRoutingModule],
  providers: [BarService],
  exports: [SideBarComponent]
})
export class CoreModule {}
