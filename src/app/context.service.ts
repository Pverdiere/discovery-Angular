import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Modal } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private connected = new Subject<boolean>();
  private modalContent = new Subject<Modal>();
  private modalActif = new Subject<boolean>();

  connected$ = this.connected.asObservable();
  modalContent$ = this.modalContent.asObservable();
  modalActif$ = this.modalActif.asObservable();

  isConnected(value: boolean){
    this.connected.next(value)
  }

  changeModalContent(value: Modal){
    this.modalContent.next(value)
  }

  modalIsActif(value: boolean){
    this.modalActif.next(value)
  }
}