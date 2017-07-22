import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepositoryService {

  promotedProducts: Product[] = [{
      name: 'Apple',
      price: 2.4,
      promoted: true,
      tags: [{
          name: 'apple'
        },
        {
          name: 'steve'
        }
      ]
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
        }
      ]
    },
  ];

  products: Product[] = [{
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
        }
      ]
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

  constructor() {}

  getProducts() {
    return this.products;
  }

  getPromotedProducts() {
    return this.promotedProducts;
  }

  filterProducts(value: string) {
    return this.filterByValue(this.getProducts(), value.toLowerCase());
  }

  filterPromotedProducts(value: string) {
    return this.filterByValue(this.getPromotedProducts(), value.toLowerCase());
  }

  private filterByValue(prod: Product[], value: string) {
    return prod.filter(filterValue => {
        return filterValue.name.toLowerCase().includes(value) ||
        filterValue.price.toString().includes(value) ||
        filterValue.tags.filter(filterTagValue => {
          return filterTagValue.name.toLowerCase().includes(value);
        }).length;
    });
  }

  sortByPrice() {
    return this.products.sort(this.sortFunctionByName);
  }

  sortByName() {
    return this.products.sort(this.sortFunctionByPrice);
  }

  private sortFunctionByName(a, b) {
    return b.name < a.name ?  1 // if b should come earlier, push a to end
         : b.name > a.name ? -1 // if b should come later, push a to begin
         : 0;
  }

  private sortFunctionByPrice(a, b) {
    return b.price < a.price ?  1 // if b should come earlier, push a to end
         : b.price > a.price ? -1 // if b should come later, push a to begin
         : 0;
  }
}
