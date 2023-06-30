import { Component } from '@angular/core';
import { User, Modal } from '../interface';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = {
    name: "",
    password: "",
    validationPassword: ""
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  validation(): void {
    if(this.user.password !== ""){
      if(this.user.password === this.user.validationPassword){
        this.userService.createUser(this.user).subscribe({
          next: response => {
            console.log(response)
            this.router.navigate(["/login"])
          },
          error: error => {
            console.log(error)
          }
        })
      }
    }
  }
}
