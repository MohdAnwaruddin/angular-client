import { Component } from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserItemComponent } from '../user-item/user-item.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
};


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule,NgClass,UserItemComponent,   HeaderComponent,AddUserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  title = 'User List';
  userlist:UserType[] = [

    {
   
      username: 'Garima',
   
      email: 'Garima@gmail.com',
      password: '1234',
   
    id: 1,
   
    },
    {
   
      username: 'Rahul',
   
      email: 'Rahul@gmail.com',
      password: '1234',
   
    id: 2,
   
    },
    
    ]

    

     handleDelete = (id: number) => {
      this.userlist = this.userlist.filter((g) => g.id !== id);
    };

    getTotal() {
      return this.userlist.length;
    }

    addUser($event: { id: number; username: string; email: string; password: string;}) {
      console.log("adding the user");
      console.log($event);
      this.userlist.push({
        username: $event.username,
        email: $event.email,
        password: $event.password,
        id: Math.floor(Math.random() * 1000),
      });
    }

}
