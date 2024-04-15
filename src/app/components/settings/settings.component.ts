import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
 // Adjust import as per your service
 // Adjust import as per your model
import { UserService, userDeleteResponse, userFetchResponse, userUpdateResponse } from '../../services/user-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'settings-data',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
 userData : any
 password : any
 userName : any
 email : any
 newPassword : any
 encryptedPassword: any
  userId: any; // Assuming you have the userId defined
  deleteClicked: boolean = false;
  updateSuccess: boolean = false;
  isDisabled: boolean = true;
  error: string = '';
  isdeleteClicked : boolean = false;
  isLoggedIn : boolean = false;

  constructor(
    private userService: UserService, // Adjust service name as per your actual service
    private route: ActivatedRoute,
    private router: Router,
   private authservice : AuthService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('_id')
    this.fetchUserData();
    this.authservice.isLoggedIn$.subscribe((res) => (this.isLoggedIn = res));
  }


  onChange (event : any) : void {

    let name : any = event.target.name
    let value : any = event.target.value
    
if ( name == "username") {
    this.userName = value
}
    
if ( name == "password") {
  this.password = value
}
    
if ( name == "newPassword") {
  this.newPassword = value
}
  }

  fetchUserData(): void {
    this.userService.handleFetchUser().subscribe((response:userFetchResponse) => {
      this.userName = response.username
      this.email = response.email
      this.encryptedPassword = response.password
      this.password = ''
      this.newPassword = ''
    })
  }

  deleteUserData () : void {
    this.userService.handleDeleteUser(this.userName, this.email, this.password).subscribe((response : userDeleteResponse) => {

      this.isdeleteClicked = true

      this.router.navigate(['/register'])
        
    })
  }

  // deleteuser(): void {
  //   this.userService.deleteUser(this.userId).subscribe(
  //     () => {
  //       alert('User deleted successfully!');
  //       this.deleteClicked = true;
  //       this.router.navigate(['/signup']);
  //     },
  //     (error: { message: string; }) => {
  //       console.error(error);
  //       this.error = error instanceof Error ? error.message : 'Something went wrong';
  //     }
  //   );
  // }

  onSubmit(): void {

    this.userService.handleUpdateUser(this.userName, this.email, this.password).subscribe(
      (response: any) => {
        console.log('User updated successfully:', response);
       
      },
      (error: { message: string; }) => {
        console.error(error);
        this.error = error instanceof Error ? error.message : 'Something went wrong';
      }
    );
  }

  clickLogin()  {
    this.isLoggedIn = false
    if(!this.isLoggedIn){
      this.router.navigateByUrl('/login')
    }
  }
 
}
