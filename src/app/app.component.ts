import { Component } from '@angular/core';
import { Token } from './interface';
import { Router } from '@angular/router';
import { ContextService } from './context.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalActif:boolean = false;
  connected:boolean = false;
  alertRenewToken:boolean = true;

  constructor(
    private route: Router,
    private contextService: ContextService
  ) {
    contextService.connected$.subscribe(
      value => {
        this.connected = value
      }
    )
    contextService.modalActif$.subscribe(
      value => {
        this.modalActif = value
      }
    )
    contextService.alertRenewToken$.subscribe(
      value => {
        this.alertRenewToken = value
      }
    )
  }

  ngOnInit():void{
    this.verifExpToken()
  }

  verifExpToken():void {
    const token = localStorage.getItem("token")
    if(token){
      const payload:Token = jwtDecode(token)
      if(payload.exp - Math.floor(Date.now()/1000) < 0){
        this.logout()
      }else{
        if(!this.connected){
          this.contextService.isConnected(true)
        }
        if(this.alertRenewToken && payload.exp - Math.floor(Date.now()/1000) < 600 && !this.modalActif){
          this.contextService.modalIsActif(true);
          this.contextService.changeModalContent({
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
                function: "noRenew"
              }
            ]
          })
        }
      }
    }
    setTimeout(() => {
      this.verifExpToken()
    },1000)
  }

  logout():void{
    localStorage.removeItem("token");
    this.contextService.modalIsActif(false);
    this.contextService.changeModalContent({});
    this.contextService.isConnected(false);
    this.contextService.changeRenewToken(true);
    this.route.navigate(["/home"]);
  }
}