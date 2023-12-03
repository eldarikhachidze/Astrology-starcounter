import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // ConfirmedValidator(password: string, confirmPassword: string): (formGroup: FormGroup) => void {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[password];
  //     const matchingControl = formGroup.controls[confirmPassword];
  //
  //     if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
  //       return;
  //     }
  //
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ confirmedValidator: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   };
  // }

  ConfirmedValidator(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(password);
      const matchingControl = formGroup.get(confirmPassword);

      if (!control || !matchingControl) {
        // One of the controls is not found in the form group
        return null;
      }

      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        // If matchingControl has errors other than confirmedValidator, return
        return null;
      }

      if (control.value !== matchingControl.value) {
        // If values are not the same, set error on matchingControl
        return { confirmedValidator: true };
      } else {
        // If values are the same, return null
        return null;
      }
    };
  }

}
