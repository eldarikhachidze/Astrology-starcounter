import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-masseg-modal',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './masseg-modal.component.html',
  styleUrl: './masseg-modal.component.scss'
})
export class MassegModalComponent implements OnInit, OnDestroy{

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
