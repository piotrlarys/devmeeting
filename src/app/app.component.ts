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
      price: 2.2,
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
      price: 2.2,
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
      price: 1,
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
      price: 1,
      promoted: true,
      tags: [{
        name: 'pie'
      }]
    }
  ];
}
