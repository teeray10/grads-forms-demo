import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/CustomValidators';

@Component({
  selector: 'app-reactive-hr',
  templateUrl: './reactive-hr.component.html',
  styleUrls: ['./reactive-hr.component.scss']
})
export class ReactiveHrComponent implements OnInit {
  employeeTypes = [
    { label: 'Contractor', id: 1 },
    { label: 'Permanent', id: 2 },
  ];

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      selectedType: [this.employeeTypes[0].id, Validators.required],
      employeeNo: [{ disabled: true, value: '' }, Validators.required],
      fullName: ['', Validators.required],
      department: ['', Validators.required],
      nickname: ['', Validators.required],
      age: ['', CustomValidators.range([10, 50, 20])],
      cellphone: null,
      email: '',
      contactViaCellphone: false,
      contactViaEmail: false
    });
  }

  submitForm(): void {
    // do something
  }

  onAccessLevelChanged(accessLevel: number): void {
    accessLevel === 1 ? this.form.get('employeeNo')?.disable() : this.form.get('employeeNo')?.enable();
  }

  // TODO: homework - clean this up using a custom validator
  onContactMediumChanged(control: AbstractControl, controlToChange: AbstractControl, controlToDisable: AbstractControl): void {
    if (!control || !controlToChange) {
      return;
    }

    control.value ?
      controlToChange.setValidators(Validators.required) :
      controlToChange.clearValidators();

    controlToChange.updateValueAndValidity();

    this.disableControl(control.value, controlToDisable);
  }

  private disableControl(value: boolean, control: AbstractControl): void {
    value ?
      control.disable() :
      control.enable();
  }

  get cellphone(): AbstractControl {
    return this.form.get('cellphone')!;
  }

  get contactViaCellphone(): AbstractControl {
    return this.form.get('contactViaCellphone')!;
  }

  get email(): AbstractControl {
    return this.form.get('email')!;
  }

  get contactViaEmail(): AbstractControl {
    return this.form.get('contactViaEmail')!;
  }

  typeID(index: number, type: any): number {
    return type.id;
  }
}
