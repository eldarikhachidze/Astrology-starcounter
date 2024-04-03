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
    active: new FormControl(true),
    errorMessage: new FormControl('')
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

  handleApiError(error: any) {
    let errorMessage = 'An error occurred.';

    switch (error?.error?.message) {
      case 'USER_NOT_FOUND':
        errorMessage = 'მომხმარებლის მეილი არ მოიძებნა.';
        break;
      case 'USER_EMAIL_ALREADY_EXISTS':
        errorMessage = 'თქვენ უკვე გამოწერილი გაქვთ კონტენტი.';
        break;
      case 'SUBSCRIPTION_ALREADY_EXISTS':
        errorMessage = 'Subscription already exists.';
        break;
      case 'SUCCESS':
        // Handle success message if needed
        break;
      default:
        // Handle other errors
        break;
    }

    this.form.get('errorMessage')?.setValue(errorMessage);
    this.showErrorModal(errorMessage);
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.subscribeService.create(this.form.value)
      .subscribe(
        res => {
          // Success scenario
          this.showSuccessModal('თქვენ წარმატებით გამოიწერეთ კონტენტი');
          this.router.navigate(['./'])
            .then(() => {
              this.form.reset();
            });
        },
        error => {
          // Error scenario
          this.handleApiError(error);
        }
      );
  }

  showSuccessModal(message: string) {
    this.openMessageModal(true, message);
    setTimeout(() => {
      this.closeMessageModal();
    }, 2000);
  }

  showErrorModal(message: string) {
    this.openMessageModal(false, message);
    // setTimeout(() => {
    //   this.closeMessageModal();
    // }, 2000);
  }

  closeMessageModal() {
    this.modalService.dismissAll();
  }

  openMessageModal(isSuccess: boolean, message: string) {
    const modalRef = this.modalService.open(MassegModalComponent, { centered: true });
    modalRef.componentInstance.isSuccess = isSuccess;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.modalDialogClass = 'custom-modal';
    console.log(message)
  }
}
