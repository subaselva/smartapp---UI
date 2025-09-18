import { Routes,RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Menu } from './menu/menu';
import { Event } from './event/event';
import { Chefs } from './chefs/chefs';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { BookATable } from './book-a-table/book-a-table';
import { NgModule } from '@angular/core';
import { SearchRestaurants } from './search-restaurants/search-restaurants';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
   {
    path: 'about', component: About
  },
  {
    path: 'menu', component: Menu
  },
  { path: 'events', component: Event},
  {path:'chefs',component:Chefs},
  {path:'gallery',component:Gallery},
  {path:'contact',component:Contact},
  { path: 'book-a-table', component: SearchRestaurants }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }