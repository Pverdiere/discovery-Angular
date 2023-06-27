import { Component } from '@angular/core';
import { User } from "../interface";
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit():void {
    this.userService.getUsers().subscribe({
      next: response => {
        this.users = response
        console.log(response)
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
