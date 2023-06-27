import { Component } from '@angular/core';
import { Token, Modal } from './interface';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { routeGuard } from './route.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalActif:boolean = false;
  contentModal:Modal = {};

  constructor(
    private route: Router
  ) {}

  ngOnInit():void{
    this.verifExpToken()
  }

  verifExpToken():void {
    const token = localStorage.getItem("token")
    if(token){
      const payload:Token = jwtDecode(token)
      if(payload.exp - Math.floor(Date.now()/1000) < 0){
        localStorage.removeItem("token");
        this.modalActif = false;
        this.contentModal = {};
        this.route.navigate(["/home"]);
      }
      if(payload.exp - Math.floor(Date.now()/1000) < 600 && ! this.modalActif){
        this.modalActif = true;
        this.contentModal = {
          warning:{
            title: "Fin de session",
            message: "Attention! Votre session arrive à sa fin. Voullez vous la renouveler ?"
          },buttons:[
            {
              type:"button",
              content:"Oui",
              function:"renewToken"
            },
            {
              type:"button",
              content: "Non",
              function: "close"
            }
          ]
        }
      }
      console.log(payload.exp - Math.floor(Date.now()/1000))
    }
    setTimeout(() => {
      this.verifExpToken()
    },10000)
  }

  changeModalActif(newValue: boolean):void {
    this.modalActif = newValue;
    this.contentModal = {};
    console.log(newValue)
  }
}