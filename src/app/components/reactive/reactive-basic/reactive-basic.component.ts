import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-basic',
  templateUrl: './reactive-basic.component.html',
  styleUrls: ['./reactive-basic.component.scss']
})
export class ReactiveBasicComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      username: '',
      website: ['', Validators.pattern('https://.+')],
      combination: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'), Validators.minLength(6), Validators.required]],
    })
  }

  submitForm(): void {
    // do something
  }

  get combination(): AbstractControl | null {
    return this.form?.get('combination');
  }
}
