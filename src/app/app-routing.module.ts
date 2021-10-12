import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './views/contact/contact.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { LoginComponent } from './views/login/login.component';
import { SearchComponent } from './views/search/search.component';
import { UserSiteComponent } from './views/user-site/user-site.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product-search', component: SearchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user-site', component: UserSiteComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
