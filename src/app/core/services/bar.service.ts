import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class BarService {
  constructor() {}

  options() {
    return of([
      { title: 'Products', route: '/product/list' },
      { title: 'Kart', route: '/order/kart' },
      { title: 'History', route: '/order/history' }
    ]);
  }
}
