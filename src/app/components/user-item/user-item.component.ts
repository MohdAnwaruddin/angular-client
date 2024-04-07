import { Component, Input, Output, EventEmitter  } from '@angular/core';

type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
};

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() groc!: UserType;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  handleDelete(id: number) {
    this.deleteUser.emit(id);
  }
}
