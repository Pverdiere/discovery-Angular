import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ContextService } from '../context.service';
import { Modal } from "../interface";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  content: Modal = {}
  modalActif:boolean = false

  constructor(
    private userService: UserService,
    private contextService: ContextService
  ) {
    contextService.modalContent$.subscribe(
      value => {
        this.content = value
      }
    )
    contextService.modalActif$.subscribe(
      value => {
        this.modalActif = value
      }
    )
  }

  choiceFunction(choice:string):void{
    switch(choice){
      case "noRenew":
        this.noRenew()
        break;
      case "renewToken":
        this.renewToken()
        break;
    }
  }

  renewToken():void {
    this.userService.renewToken().subscribe({
      next: response => {
        localStorage.setItem("token", response.access_token)
        this.fermeture()
      },
      error: error => {
        console.log(error)
      }
    })
  }

  noRenew():void {
    this.contextService.changeRenewToken(false);
    this.fermeture();
  }

  fermeture():void{
    this.contextService.changeModalContent({})
    this.contextService.modalIsActif(false)
  }
}