import { Component } from '@angular/core';
import { User } from '../interface';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    name: "",
    password: ""
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  validation(): void {
    console.log(this.user)
    this.userService.login(this.user).subscribe({
      next: response => {
        console.log("test");
        localStorage.setItem("token",response.access_token);
        this.router.navigate(["/profile"]);
      },
      error: error => {
        console.log(error)
        if(error) console.log("test")
      }
    })
  }
}