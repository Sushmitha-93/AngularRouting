import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [HttpService]
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.getUsers().subscribe((res) => console.log(res)); //To check data in console
    this.httpService.getUsers().subscribe((res) => this.users = res);
  }

  postNewUser() {
    this.httpService.postNewUser().subscribe((res) => console.log(res));
  }

}
