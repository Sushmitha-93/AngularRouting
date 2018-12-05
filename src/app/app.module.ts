import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookCaseComponent } from './book-case/book-case.component'; // import Routes
import { LogServiceService } from './log-service.service';
import { ToysComponent } from './toys/toys.component';
import { ToysService } from './toys.service';

import { FormsModule } from '@angular/forms'; // import form for ngModule
import { HttpClientModule } from '@angular/common/http'; // import http module
import { UsersComponent } from './users/users.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';    //for Reactive forms



// Map Routes
const APP_ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'book', component: BookComponent, children: [{ path: 'img', component: BookCaseComponent }] }, // for sub component
  { path: 'toys', component: ToysComponent },
  { path: 'users', component: UsersComponent },
  { path: 'forms', component: FormsComponent }
];
const routing = RouterModule.forRoot(APP_ROUTES); // RouterModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    BookComponent,
    BookCaseComponent,
    ToysComponent,
    UsersComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,                // import routing
    FormsModule,           // import forms Module
    HttpClientModule,       // import HttpClientMoule
    ReactiveFormsModule
  ],
  providers: [LogServiceService, ToysService], // add service if the service needs to available for the entire project
  bootstrap: [AppComponent]
})
export class AppModule { }
