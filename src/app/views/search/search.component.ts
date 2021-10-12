import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private loadScripts: LoadScriptsService) { }

  ngOnInit(): void {
    this.loadScripts.loadScripts(['searchFunctionality']);
  }

  updateSearch(reSearch: boolean) {
    if (reSearch) {
      ProductListComponent.updateSearch((document.getElementById("search-again-field") as HTMLInputElement).value);
    } else {
      ProductListComponent.updateSearch((document.getElementById("search-field") as HTMLInputElement).value);
    }
  }
}
