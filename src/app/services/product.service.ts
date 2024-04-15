import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CategoryResponse {
  success: boolean;
  data: { name: string; url: string[] }[];
}

export interface ProductResponse {
  success: boolean;
  data: { success: boolean; data: object[] }[];
}

export interface ProductDetailsResponse {
  success: boolean;
  data: { success: boolean; data: object[] }[];
}



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'https://reactserver-pink.vercel.app/products/fetch-categories';

  constructor(private http: HttpClient) { }

  fetchProductCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.url);
  }

  fetchProducts(category: string): Observable<ProductResponse> {
    return this.http.post<ProductResponse>('https://reactserver-pink.vercel.app/products/fetch-products', { categoryName: category });
  }

  fetchProductDetails(id: string): Observable<ProductDetailsResponse> {
    return this.http.post<ProductDetailsResponse>('https://reactserver-pink.vercel.app/products/fetch-product-details', { id: id });
  }

}
