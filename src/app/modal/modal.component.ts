import { Component, Output, Input, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Modal } from "../interface"

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() actif: boolean = false
  @Input() content: Modal = {}
  @Output() changeActifEvent = new EventEmitter<boolean>()

  constructor(
    private userService: UserService
  ) {}

  choiceFunction(choice:string):void{
    switch(choice){
      case "close":
        this.fermeture()
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

  fermeture():void{
    this.changeActifEvent.emit(false)
  }
}
