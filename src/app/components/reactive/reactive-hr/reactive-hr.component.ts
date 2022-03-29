import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/CustomValidators';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reactive-hr',
  templateUrl: './reactive-hr.component.html',
  styleUrls: ['./reactive-hr.component.scss']
})
export class ReactiveHrComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  employeeTypes = [
    { label: 'Contractor', id: 1 },
    { label: 'Permanent', id: 2 },
  ];

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  initSubscriptions(): void {
    this.getContactViaCellphoneControl().valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => {
      value ?
        this.getCellphoneControl().setValidators(Validators.required) :
        this.getCellphoneControl().clearValidators();

      this.getCellphoneControl().updateValueAndValidity();
    });

    this.getContactViaEmailControl().valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => {
      value ?
        this.getEmailControl().setValidators(Validators.required) :
        this.getEmailControl().clearValidators();

      this.getEmailControl().updateValueAndValidity();
    });
  }

  submitForm(): void {
    // do something
  }

  onEmployeeTypeChanged(typeID: number): void {
    typeID === 1 ? this.getEmployeeNoControl()?.disable() : this.getEmployeeNoControl()?.enable();
  }

  disableControl(value: boolean, controlToDisable: AbstractControl): void {
    value ?
      controlToDisable.disable() :
      controlToDisable.enable();
  }

  /* GETTERS */

  getCellphoneControl(): AbstractControl {
    return this.form.get('cellphone')!;
  }

  getContactViaCellphoneControl(): AbstractControl {
    return this.form.get('contactViaCellphone')!;
  }

  getEmailControl(): AbstractControl {
    return this.form.get('email')!;
  }

  getContactViaEmailControl(): AbstractControl {
    return this.form.get('contactViaEmail')!;
  }

  getEmployeeNoControl(): AbstractControl {
    return this.form.get('employeeNo')!;
  }

  /* TRACKBY */
  
  typeID(index: number, type: any): number {
    return type.id;
  }
}
