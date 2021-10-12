import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from './shared/services/load-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private scriptLoader:LoadScriptsService) {}
  ngOnInit(): void {
    this.scriptLoader.loadScripts(["menuPopUp"]);
  }
}
