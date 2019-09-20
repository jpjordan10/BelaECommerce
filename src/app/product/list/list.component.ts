import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products$ = this.productService.getProducts();
  isCardList: boolean;
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  activateListView(mode) {
    this.isCardList = mode;
  }
}
