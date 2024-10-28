import { Component } from '@angular/core';
import { User } from './user/user.model';
import { USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users: User[] = USERS;
  selectedUserID!: string;

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserID);
  }

  protected onSelectUser(id: string){
    this.selectedUserID = id;
  }
}
