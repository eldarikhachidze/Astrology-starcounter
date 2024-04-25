import {Component, Input, OnDestroy} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-masseg-modal',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './masseg-modal.component.html',
  styleUrl: './masseg-modal.component.scss'
})
export class MassegModalComponent implements OnDestroy {

  @Input() useCustomStyles: boolean = false;
  @Input() isSuccess?: boolean;
  @Input() message?: string;

  constructor(private activeModal: NgbActiveModal) {
  }

  closeModal() {
    this.activeModal.close();
  }

  ngOnDestroy() {
    this.closeModal();
  }

}
