import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-field',
  templateUrl: './product-field.component.html',
  styleUrls: ['./product-field.component.css']
})
export class ProductFieldComponent implements OnInit {

  @Input() product: Product;

  constructor() {
    this.product = {
      id: 0,
      title: '',
      description: '',
      img_url: ''
    }
  }

  ngOnInit(): void {
  }

}
