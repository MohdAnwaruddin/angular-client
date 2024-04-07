import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, IAuth } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../../../validators/confirm-password.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authToken: IAuth = { token: '' };
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,  Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(3),confirmPasswordValidator()]),
    
  });

  onSubmit() {
    this.authService
      .register(
        this.registerForm.value.username!,
        this.registerForm.value.email!,
        this.registerForm.value.password!
      )
      .subscribe({
        next: (token) => {
          console.log(token);
          // this.authToken = token;
          //localStorage.setItem('authtoken', token.token);
          this.router.navigateByUrl('/about');
        },
        error: (e) => {
          console.log(e.error.errors);
          this.errorMessage = e.error.errors[0].msg;
        },
        complete: () => {
          console.info('complete');
        },
      });
  }

}
