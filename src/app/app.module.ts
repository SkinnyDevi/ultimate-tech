import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/views/menu-bar/menu-bar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { SearchComponent } from './views/search/search.component';
import { UserSiteComponent } from './views/user-site/user-site.component';
import { ProductListComponent } from './views/search/product-list/product-list.component';
import { ProductFieldComponent } from './views/search/product-list/product-field/product-field.component';
import { TycComponent } from './shared/views/tyc/tyc.component';
import { WorkerCarouselComponent } from './shared/views/worker-carousel/worker-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomePageComponent,
    ContactComponent,
    LoginComponent,
    SearchComponent,
    UserSiteComponent,
    ProductListComponent,
    ProductFieldComponent,
    TycComponent,
    WorkerCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
