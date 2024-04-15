import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface cartUpdateResponse {
  success: boolean;
  data: { success: boolean; data: object[] }[];
}

export interface fetchCartResponse {
  success: boolean;
  data: { success: boolean; data: object[] }[];
}


export interface addCartResponse {
  success: boolean;
 
}

export interface deleteCartResponse {
  success: boolean;
  data: { success: boolean; data: object[] }[];
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  handleUpdateCart(productId: string, userId:string, quantity:number): Observable<cartUpdateResponse> {
    return this.http.post<cartUpdateResponse>('https://reactserver-pink.vercel.app/cart/update-product', { productId, userId, quantity });
  }

  handleFetchCart(userId : string) : Observable<fetchCartResponse> {
    return this.http.post<fetchCartResponse>('https://reactserver-pink.vercel.app/cart/fetch-cart', { userId });

  }

  handleAddCart(userId : string, productId:string, quantity:number) :Observable<addCartResponse> {
    return this.http.post<addCartResponse> ('https://reactserver-pink.vercel.app/cart/add-product', {userId, productId,quantity } )
  }

  handleDeleteCart(productId:string, userId:string) :Observable<deleteCartResponse> {
return this.http.post<deleteCartResponse> ( 'https://reactserver-pink.vercel.app/cart/delete-product',{ productId,userId} )
  }
}


