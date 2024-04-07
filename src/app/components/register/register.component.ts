import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import {   FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
import{confirmPasswordValidator} from "../../validators/confirm-password.validator";
  type UserType = {
    id: number;
    username: string;
    email: string;
    password: string;
  };

  

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,  Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(3),confirmPasswordValidator()]),
    
  },
  {
    // validator: confirmPasswordValidator
  });
  register(){
    console.log(this.registerForm.value);
  }

  

}
