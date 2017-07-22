import { ProductRepositoryService } from './product/product-repository.service';
import { Product } from './product/product.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myInput = new FormControl();
  products: Product[];
  filteredProducts: Product[];
  filteredPromotedProducts: Product[];
  promotedProducts: Product[];

  constructor(private productRepository: ProductRepositoryService) {
  }

  ngOnInit(): void {
    this.filteredProducts = this.productRepository.getProducts();
    this.products = this.productRepository.getProducts();
    this.filteredPromotedProducts = this.productRepository.getPromotedProducts();
    this.promotedProducts = this.productRepository.getPromotedProducts();

    this.myInput.valueChanges.subscribe(value => {
      this.filteredProducts = this.productRepository.filterProducts(value);
      this.filteredPromotedProducts = this.productRepository.filterPromotedProducts(value);
    });
  }

}
