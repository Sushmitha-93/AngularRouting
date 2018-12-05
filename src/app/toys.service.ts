import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  toys = [{ toyid: 1, brand: 'Fun skool', age: '3-6', price: 450 },
  { toyid: 2, brand: 'Lego City', age: '5-13', price: 1500 },
  { toyid: 3, brand: 'Hot Wheels', age: '5-10', price: 850 },
  { toyid: 4, brand: 'Fiser price', age: '0-5', price: 450 },
  { toyid: 5, brand: 'Barbie', age: '2-10', price: 450 },
  { toyid: 6, brand: 'Play doh', age: '4-12', price: 1000 },
  { toyid: 7, brand: 'Game Boy', age: '6-18', price: 450 }
  ];

  found: any = 'Invalid search';

  constructor() { }

  getToysData() {
    return this.toys;
  }

  getToyByBrand(brand: string) {
    console.log(brand);
    this.toys.map((toy) => {
      console.log(toy.brand);
      if (toy.brand === brand) {
        this.found = toy;
        console.log(toy);
      }
    });
    return this.found;
  }

}
