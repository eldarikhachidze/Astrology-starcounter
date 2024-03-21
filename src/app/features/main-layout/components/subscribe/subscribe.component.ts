import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SubscribeService} from "../../../../core/services/subscribe.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MassegModalComponent} from "../../../masseg-modal/masseg-modal.component";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    active: new FormControl(true)
  });

  isInputFocused: { [key: string]: boolean } = {};

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private subscribeService: SubscribeService
  ) {
  }

  isInputValid(controlName: string): boolean {
    return !!this.form.get(controlName)?.valid;
  }

  onInputFocus(controlName: string) {
    this.isInputFocused[controlName] = true;
  }

  onInputBlur(controlName: string) {
    this.isInputFocused[controlName] = false;
  }

  isInvalidAndTouched(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  get isInputFocusedFn(): (key: string) => boolean {
    return (key: string) => this.isInputFocused[key];
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.subscribeService.create(this.form.value)
      .subscribe(
        res => {
          // Success scenario
          this.showSuccessModal('Operation completed successfully.');
          this.router.navigate(['./'])
            .then(() => {
              this.form.reset();
            });
        },
        error => {
          // Error scenario
          this.showErrorModal(error.error.message);
        }
      );
  }

  showSuccessModal(message: string) {
    this.openMessageModal(true, message);
  }

  showErrorModal(message: string) {
    this.openMessageModal(false, message);
  }

  openMessageModal(isSuccess: boolean, message: string) {
    const modalRef = this.modalService.open(MassegModalComponent, { centered: true });
    modalRef.componentInstance.isSuccess = isSuccess;
    modalRef.componentInstance.message = message;
    console.log(message)
  }
}
