import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  accessLevels = [
    { label: 'Basic', id: 1 },
    { label: 'Admin', id: 2 },
  ];

  username = '';
  password = '';
  email = '';
  website = '';
  combination = '';

  @ViewChild('myForm') form!: NgForm;

  resetForm(form: NgForm): void {
    form.resetForm();
  }

  submitForm(form: NgForm): void {
    // do something
  }
}
