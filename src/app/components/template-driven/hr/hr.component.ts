import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent {
  employeeTypes = [
    { label: 'Contractor', id: 1 },
    { label: 'Permanent', id: 2 },
  ];

  selectedTypeID = 1;
  employeeNo = '';
  fullName = '';
  department = '';
  nickname = '';
  contactViaCellphone = false;
  contactViaEmail = false;
  cellphone = '';
  email = '';

  submitForm(form: NgForm): void {
    // do something
  }

  resetForm(form: NgForm): void {
    form.resetForm();
  }

  typeID(index: number, selectedType: any): number {
    return selectedType.id;
  }
}
