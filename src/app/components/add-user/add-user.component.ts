import { Component, Output, EventEmitter } from '@angular/core';
import {   FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';

  type UserType = {
    id: number;
    username: string;
    email: string;
    password: string;
  };

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @Output() addUser: EventEmitter<UserType> =
  new EventEmitter<UserType>();

  onSubmit(form: NgForm) {
    console.log("calling submit1");
    console.log(form);
    let id = Math.floor(Math.random() * 1000);
    let username = form.value.username;
    let email = form.value.email;
    let password = form.value.password;
    this.addUser.emit({ id, username, email, password});
  }

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,  Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit2() {
    console.log("calling submit12");
    this.addUser.emit({
      id: Math.floor(Math.random() * 1000),
      username: this.userForm.value.username!,
      email: this.userForm.value.email!,
      password: this.userForm.value.password!,
    });
  }

}
