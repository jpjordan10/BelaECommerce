import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { HistoryComponent } from './history/history.component';
import { KartComponent } from './kart/kart.component';

const routes: Routes = [
  {
    path: 'order',
    component: MainLayoutComponent,
    children: [
      { path: 'history', component: HistoryComponent },
      { path: 'kart', component: KartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
