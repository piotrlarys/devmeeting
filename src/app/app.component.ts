import { Product } from './product/product.model';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myInput = new FormControl();

  constructor() {
    this.myInput.valueChanges.subscribe(value => {
      let value2: string = value;
      value2 = value2.toLowerCase();
      this.filteredProducts = this.products.filter(filterValue => {
        return filterValue.name.toLowerCase().includes(value2) ||
        filterValue.price.toString().includes(value2) ||
        filterValue.tags.filter(filterTagValue => {
          return filterTagValue.name.toLowerCase().includes(value2);
        }).length;
      });
      this.filteredPromotedProducts = this.promotedProducts.filter(filterValue => {
        return filterValue.name.toLowerCase().includes(value2) ||
        filterValue.price.toString().includes(value2) ||
        filterValue.tags.filter(filterTagValue => {
          return filterTagValue.name.toLowerCase().includes(value2);
        }).length;
      });
    });
  }

promotedProducts: Product[] = [
    {
      name: 'Apple',
      price: 2.4,
      promoted: true,
      tags: [{
        name: 'apple'
      },
      {
        name: 'steve'
      }]
    },
    {
      name: 'Blueberry',
      price: 5.2,
      promoted: true,
      tags: [{
        name: 'blueberry'
      },
      {
        name: 'the best'
      }]
    },
  ];

  products: Product[] = [
    {
      name: 'Orange',
      price: 1.34,
      promoted: true,
      tags: [{
        name: 'orange'
      },
      {
        name: 'annoing'
      },
      {
        name: 'phone'
      }]
    },
    {
      name: 'Banana',
      price: 0.65,
      promoted: true,
      tags: [{
        name: 'pie'
      }]
    },
    {
      name: 'Watermelon',
      price: 4.25,
      promoted: true,
      tags: [{
        name: 'water'
      }]
    }
  ];

  filteredProducts: Product[] = this.products;
  filteredPromotedProducts: Product[] = this.promotedProducts;
}
