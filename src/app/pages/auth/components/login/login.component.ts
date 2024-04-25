import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {MassegModalComponent} from "../../../../features/masseg-modal/masseg-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  isInputFocused: { [key: string]: boolean } = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal,
  ) {
  }


  ngOnInit(): void {

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
    console.log('error:', error)
    let errorMessage = 'პაროლი არასწორია';
    console.log('error?.error?.message:', error?.error?.message)
    switch (error?.error?.message) {
      case 'USER_NOT_FOUND':
        errorMessage = 'მომხმარებლის მეილი არასწორია.';
        break;
      case 'Password wrong':
        errorMessage = 'მომხმარებლის პაროლი არასწორია.';
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
    if (this.form.invalid) return

    this.authService.login(this.form.value).subscribe(res => {
        console.log('res', res)
        if (res) {
          this.showSuccessModal('თქვენ წარმატებით გაიარეთ აუტორიზაცია');
          setTimeout(() => {
            this.router.navigate(['./'])
          }, 2000);
        }
      },
      (error) => {
        this.handleApiError(error);
      })

  }

  showSuccessModal(message: string) {
    this.openMessageModal(true, message);
    setTimeout(() => {
      this.closeMessageModal();
    }, 2000);
  }

  showErrorModal(message: string) {
    this.openMessageModal(false, message);
    setTimeout(() => {
      this.closeMessageModal();
    }, 2000);
  }

  closeMessageModal() {
    this.modalService.dismissAll();
  }

  openMessageModal(isSuccess: boolean, message: string) {
    const modalRef = this.modalService.open(MassegModalComponent, {centered: true});
    modalRef.componentInstance.isSuccess = isSuccess;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.modalDialogClass = 'custom-modal';
    console.log('massage:', message)
  }

}
