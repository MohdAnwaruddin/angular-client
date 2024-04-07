import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import {CategoryResponse } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.productService.fetchProductCategories().subscribe((response: CategoryResponse) => {
      this.categories = response.data;
    });
  }

  navigateToCategory(categoryName: string): void {
    console.log(`Navigating to category: ${categoryName}`);
    this.router.navigate(['/categories', categoryName]);
  }
}
