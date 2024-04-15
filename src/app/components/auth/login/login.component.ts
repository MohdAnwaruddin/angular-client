import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, IAuth } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authToken: IAuth = { token: '' };

  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
  });

  onRegisterClick() : void  {

    this.router.navigateByUrl('/register')

  }
  //   console.log('1111111')
  //  
  

  onSubmit() {
    this.authService
      .login(this.loginForm.value.username!, this.loginForm.value.password!)
      .subscribe({
        next: (token) => {
          console.log(token);
          // this.authToken = token;
          //localStorage.setItem('authtoken', token.token);
          this.router.navigateByUrl('/product-categories');
        },
        error: (e) => {
          console.log(e);
          this.errorMessage = e.error.error;
        },
        complete: () => {
          console.info('complete');
        },
      });
  }
}
