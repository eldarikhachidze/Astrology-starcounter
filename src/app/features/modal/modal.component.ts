import {Component, EventEmitter, input, Output} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() confirmEvent = new EventEmitter<boolean>();

  confirm() {
    this.confirmEvent.emit(true);
  }

  close() {
    this.confirmEvent.emit(false);
  }

}
