import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
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
export class MassegModalComponent implements OnInit, OnDestroy{

  @Input() useCustomStyles: boolean = false;
  @Input() isSuccess?: boolean;
  @Input() message?: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.isSuccess) {
      setTimeout(() => this.closeModal(), 2000); // Close modal after 2 seconds for success message
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  ngOnDestroy() {
    this.closeModal();
  }

}
