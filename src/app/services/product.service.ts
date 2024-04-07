import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CategoryResponse {
  success: boolean;
  data: { name: string; url: string[] }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:3001/products/fetch-categories';

  constructor(private http: HttpClient) { }

  fetchProductCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.url);
  }

  fetchProducts(category: string): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3001/products/fetch-products', { categoryName: category });
  }

}
