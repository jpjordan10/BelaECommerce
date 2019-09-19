import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // let params = new HttpParams();
    // params = params.append('_sort', 'votes');
    // params = params.append('_order', 'desc');
    // console.log('hereee');
    return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe();
  }
}
