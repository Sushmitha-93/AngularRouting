import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookCaseComponent } from './book-case/book-case.component'; // import Routes

const APP_ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'book', component: BookComponent, children: [{ path: 'img', component: BookCaseComponent }] }// for sub component
];
const routing = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    BookComponent,
    BookCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing                   // import routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
