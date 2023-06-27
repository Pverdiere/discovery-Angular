import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interface';
import { UserService } from '../user.service';
import { Token } from "../interface"
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  user: User | undefined;
  myProfil: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const token = localStorage.getItem("token") || ""
    let payload:Token = jwtDecode(token)
    this.myProfil = id == payload.id
    this.getUser(id)
  }

  getUser(id:number): void {
    this.userService.getUserAllDetails(id).subscribe({
      next: response => {
        this.user = response
        console.log(this.user)
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
