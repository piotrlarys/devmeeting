import { Product } from './product/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
    ,
    {
      name: 'Watermelon',
      price: 4.25,
      promoted: true,
      tags: [{
        name: 'water'
      }]
    }
  ];
}
