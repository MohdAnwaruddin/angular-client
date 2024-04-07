// import { FormGroup } from "@angular/forms"

// export const confirmPasswordValidator =(controlName: string, controlNameToMatch: string)=>{
//     return(formGroup: FormGroup)=>{
//         let control =formGroup.controls[controlName];
// let controlToMatch=formGroup.controls[controlNameToMatch];

// if(controlToMatch.errors && !controlToMatch.errors['confirmPasswordValidator']){
//     return;
// }

// if(control.value !=controlToMatch.value){
//     controlToMatch.setErrors({confirmPasswordValidator: true})
// }
// else{
//     controlToMatch.setErrors(null);
// }
//     }
// }4

import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmpassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  };
}
