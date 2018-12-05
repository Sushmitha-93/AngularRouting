import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css'],
  providers: [ToysService]
})
export class ToysComponent implements OnInit {

  toysList = [];
  toy = {};
  brand: string;
  show = false;


  constructor(private toys: ToysService) { }

  ngOnInit() {
    this.toysList = this.toys.getToysData();
  }

  search() {
    this.toy = this.toys.getToyByBrand(this.brand);
    this.show = !this.show;
  }

}
