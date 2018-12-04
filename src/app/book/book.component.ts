import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = ['NodeJs in Action', 'Mastering Angular', 'Black book'];
  constructor() { }

  ngOnInit() {
  }

}
