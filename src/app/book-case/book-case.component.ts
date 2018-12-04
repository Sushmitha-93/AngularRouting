import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-case',
  templateUrl: './book-case.component.html',
  styleUrls: ['./book-case.component.css']
})
export class BookCaseComponent implements OnInit {

  images = ['assets/AngularNinja.png', 'assets/NodejsBook.png', 'assets/ExpressJs.png'];

  bookimg: String = this.images[0];
  counter = 1;

  nextImage() {
    if (this.counter > 3) {
      this.counter = 0;
    }

    this.bookimg = this.images[this.counter];
    this.counter++;
  }

  constructor() { }

  ngOnInit() {
  }

}
