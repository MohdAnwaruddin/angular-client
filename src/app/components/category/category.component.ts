import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: string = ''; // Initialize the property

  products: any[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: string }) => { // Type assertion here
      this.category = params['category']; // Access the property with ['category']
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    this.productService.fetchProducts(this.category).subscribe(products => {
      this.products = products;
    });
  }
}
