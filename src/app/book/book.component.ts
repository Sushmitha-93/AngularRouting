import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [LogServiceService] // 1)Add log service in providers.
  // If we want service to be avialble for entire application, add it in app.module
})
export class BookComponent implements OnInit {

  books = ['NodeJs in Action', 'Mastering Angular', 'Black book'];

  // 2)DEPENDENCY INJECTION by difining the object in the contructor parameter, object must be porivate
  // Constructor is called fist and then ng on init
  constructor(private logger: LogServiceService) {
    console.log('Contructor');
  }

  ngOnInit() {
    this.logger.logService(); // 3)calling that method when component gets initialized
    console.log('ngOnInit');
  }

}
