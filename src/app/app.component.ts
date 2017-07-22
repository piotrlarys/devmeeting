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
  promotedProducts: Product[];

  constructor(private productRepository: ProductRepositoryService) {
  }

  ngOnInit(): void {
    this.products = this.productRepository.getProducts();
    this.promotedProducts = this.productRepository.getPromotedProducts();

    this.myInput.valueChanges.subscribe(value => {
      this.products = this.productRepository.filterProducts(value);
      this.promotedProducts = this.productRepository.filterPromotedProducts(value);
    });
  }

  sortByName(){

  }

  sortByPrice(){

  }
}
