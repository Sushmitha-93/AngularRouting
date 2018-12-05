import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Service is already added in app.module, so no need to add in providers here
})
export class HomeComponent implements OnInit {

  constructor(private logger: LogServiceService) { } // Inject dependency

  ngOnInit() {
    this.logger.logService();
  }

}
