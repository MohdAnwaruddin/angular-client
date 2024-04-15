import { Component, OnInit } from '@angular/core';
import { CartService, cartUpdateResponse, fetchCartResponse } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductDetailsResponse } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit{


 userId : any = localStorage.getItem("_id");
 cartItems: any = []
 total: any = 0


 constructor(private cartService: CartService, private authService: AuthService, private router : Router) { }
    isLoggedIn : boolean = false

  ngOnInit () : void {

      this.handleFetchCart();
      this.authService.isLoggedIn$.subscribe((res) => (this.isLoggedIn = res));


  }


  handleUpdateCart(productId: string, quantity:number, action:string): void {
    let temporaryQuantity :any = quantity;
    action == "increase" ? temporaryQuantity++ : temporaryQuantity--;
    this.cartService.handleUpdateCart(productId, this.userId, temporaryQuantity).subscribe((response: cartUpdateResponse) => {
      if(response.success){
          this.handleFetchCart()
      }
    });
  }

  handleFetchCart() : void {
    this.cartService.handleFetchCart(this.userId).subscribe((response: fetchCartResponse) => {
     this.cartItems = response.data
     let total = 0
     response.data.map((cartItem:any) => {
      total += parseFloat(cartItem.productId.price) * cartItem.quantity
     })
     this.total = total
    })
  }

  handleDeleteCart(productId:string) :void {
    this.cartService.handleDeleteCart(productId, this.userId).subscribe((response: fetchCartResponse) => {
      if(response.success){
        this.handleFetchCart()
      }
  })
}


clickLogin(){
  this.isLoggedIn = false
  if(!this.isLoggedIn){
    this.router.navigateByUrl('/login')
  }
  else
  {
    this.handleFetchCart();
  }
}

 }
