import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static range([startRange, endRange]: number[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const inRange = control.value >= startRange && control.value <= endRange;

      return inRange ? null : { range: true };
    }
  }
}
