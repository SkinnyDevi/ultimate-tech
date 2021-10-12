import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  static searchQuery = new Subject<string>();

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    ProductListComponent.searchQuery.subscribe(search => {
      let noProds = document.getElementById("no-prods") as HTMLDivElement;
      if (search == '') {
        noProds.style.display = 'block';
      } else {
        noProds.style.display = 'none';
      }
      this.products = [];
      this.productService.loadProducts().subscribe(data => {
        for (let p of data) {
          if (p.title.toLowerCase().includes(search.toLowerCase())) {
            this.products.push(p);
          }
        }
      });
    })

  }

  static updateSearch(p: string) {
    ProductListComponent.searchQuery.next(p);
  }

}
