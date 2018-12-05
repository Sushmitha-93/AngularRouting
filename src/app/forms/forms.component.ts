import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  /*
  displayOnConsole(formData: any) {
    console.log(':::::::::: Employee Details :::::::::::');
    console.log('Emp no = ', formData.empno);
    console.log('Emp nname = ', formData.empname);
    console.log('Age = ', formData.age);
    console.log('House no = ', formData.AddressDetails.houseno);
    console.log('Building = ', formData.AddressDetails.buildingname);
    console.log('Street= ', formData.AddressDetails.street);
    console.log('City = ', formData.AddressDetails.city);
    console.log('Pin Code = ', formData.AddressDetails.pincode);
    console.log('Country = ', formData.AddressDetails.country);
  }
  */

  public employeeDetails: FormGroup;

  constructor() {
    this.employeeDetails = new FormGroup({
      empno: new FormControl(),
      empname: new FormControl('', Validators.required),
      age: new FormControl,
      AddressDetails: new FormGroup({
        houseno: new FormControl(),
        building: new FormControl(),
        street: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]),
        city: new FormControl(),
        pincode: new FormControl(),
        country: new FormControl()
      })
    });
  }

  displayOnConsole(): void {
    console.log('::::::::::: Employee Details :::::::::::');
    console.log(this.employeeDetails.value);
    console.log(':::::::: End of Employee Details ::::::::');
  }

  ngOnInit() {
  }

}
