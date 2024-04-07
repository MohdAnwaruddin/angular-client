import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactusService } from '../../services/contactus.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  errorMessage: string = '';
  successMessage: string = ''; // Add success message variable
  constructor(private contactusService: ContactusService, private router: Router) {}
  ngOnInit(): void {}

  contactusForm = new FormGroup({
    fullname: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    message: new FormControl<string | null>(null, Validators.required),
  });

  onSubmit() {
    this.contactusService
      .addContactmsg(
        this.contactusForm.value.fullname!,
        this.contactusForm.value.email!,
        this.contactusForm.value.message!
      ).subscribe({
        next: (response) => {
          this.successMessage = response.msg[0]; // Set success message
          this.contactusForm.reset(); // Reset the form
        },
        error: (error) => {
          console.log(error);
          this.errorMessage = error.error.msg[0]; // Set error message
        }
      });
    }
  }
