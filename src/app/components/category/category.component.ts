import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {ProductResponse } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: string = ''; // Initialize the property

  products: any[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService,  private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: string }) => { // Type assertion here
      this.category = params['category']; // Access the property with ['category']
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    this.productService.fetchProducts(this.category).subscribe((response: ProductResponse) => {
      this.products = response.data;
    });
  }
  navigateToProduct(productId: string): void {
    console.log(`Navigating to product: ${productId}`);
    this.router.navigate(['/products', productId]);
  }
}
