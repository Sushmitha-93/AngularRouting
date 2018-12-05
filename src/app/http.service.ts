// Service class to fetch the users JSON data from the link using http
// Fake online JSON Rest apis: https://jsonplaceholder.typicode.com/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { } // inject HttpClient

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  postNewUser() {
    let newUser = { name: 'Sushmitha', phone: 235648256 }; // adding this user
    return this.http.post('https://jsonplaceholder.typicode.com/users', newUser);
  }

}
