import { Component, OnInit } from '@angular/core';
import { ProductDetailsResponse, ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService, addCartResponse, cartUpdateResponse, deleteCartResponse, fetchCartResponse } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
    id: string = ''; // Initialize the property
    products: any[] = [];
    quantity :number = 0;
    userId : any = localStorage.getItem("_id");
   

    isAddedToCart:boolean = false;

  
    constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) { }
  
    ngOnInit(): void {
      this.route.params.subscribe((params: { [key: string]: string }) => { // Type assertion here
        this.id = params['id']; // Access the property with ['category']
        this.fetchProductDetails();
        this.handleFetchCartProducts();
        

        
      })
    }
  
    fetchProductDetails(): void {
     let respo = this.productService.fetchProductDetails(this.id).subscribe((response: ProductDetailsResponse) => {
        this.products = response.data;
        console.log(response)
      });
    }

    handleUpdateCart(action:string): void {

      let temporaryQuantity :any = this.quantity;
      action == "increase" ? temporaryQuantity++ : temporaryQuantity--;
 let response1 = this.cartService.handleUpdateCart(this.id, this.userId, temporaryQuantity).subscribe((response : cartUpdateResponse) => {
this.quantity = temporaryQuantity;
}       )  
console.log(response1)
      };

      handleFetchCartProducts() : void {
        this.cartService.handleFetchCart(this.userId).subscribe((response : fetchCartResponse)=> {
          this.isAddedToCart = false;
          if (response.data.length > 0 )
          {
            response.data.map((cartItem : any) => {
              if(cartItem.productId._id == this.id)
              {
                this.isAddedToCart = true
                this.quantity = cartItem.quantity
              }
            })
          }
        })

}

handleDeleteCart() : void {
this.cartService.handleDeleteCart(this.id, this.userId ).subscribe(( response : deleteCartResponse) => {

  if (response.success) 
  {
    this.isAddedToCart = false
    this.quantity =0
  }

})
}

handleAddCart() : void {
this.cartService.handleAddCart(this.userId, this.id, 1).subscribe((response:addCartResponse) => {


  this.isAddedToCart = response.success 
  this.quantity = response.success ? 1 : 0 

})


}
  }