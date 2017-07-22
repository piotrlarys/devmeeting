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
      }]
    }
  ];

  products: Product[] = [
    {
      name: 'Orange',
      price: 1,
      promoted: true,
      tags: [{
        name: 'orange'
      }]
    }
  ];
}
