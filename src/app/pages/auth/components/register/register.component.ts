import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {of, switchMap} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, Validators.required),
    birthDate: new FormControl('', Validators.required),
    timeOfBirth: new FormControl(''),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    // phone: new FormControl(null, [Validators.required, Validators.minLength(9)]),
  }, {validators: this.ConfirmedValidator('password', 'confirmPassword')})

  mode: 'profile' | 'register' = 'register';

  isProfileView: boolean = false; // New state variable
  isEditable: boolean = false;
  isProfilePage: boolean = false;
  constructor(
    private router:Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.authService.currentViewMode.subscribe(mode => {
      this.isProfileView = mode === 'profile';
      this.initializeForm();
    });
  }

  ngOnInit() {
    this.initializeForm()
    this.authService.currentViewMode.subscribe(viewMode => {
      this.mode = viewMode === 'profile' ? 'profile' : 'register';
    });
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.authService.getUser(params['id']);
        }
        return of(null);
      })
    ).subscribe(res => {
      if (res) {
        const {password, confirmPassword, ...restOfUserData} = res;  // Destructuring to exclude password & confirmPassword
        this.form.patchValue({
          ...restOfUserData,
          id: res.id  // Assuming id should be included
        });
      }
    });
  }

  get f():any {
    return this.form.controls;
  }

  initializeForm() {
    const isDisabled = this.mode === 'profile' && !this.isEditable;
    const passwordValidators = this.mode === 'register' ? [Validators.required, Validators.minLength(6)] : [];
    const confirmPasswordValidators = this.mode === 'register' ? [Validators.required] : [];

    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl({ value: '', disabled: isDisabled }, Validators.required),
      lastName: new FormControl({ value: '', disabled: isDisabled }, Validators.required),
      email: new FormControl({ value: '', disabled: isDisabled }, [Validators.required, Validators.email]),
      password: new FormControl({ value: '', disabled: isDisabled }, passwordValidators),
      confirmPassword: new FormControl({ value: '', disabled: isDisabled }, confirmPasswordValidators),
      birthDate: new FormControl({ value: '', disabled: isDisabled }, Validators.required),
      timeOfBirth: new FormControl({ value: '', disabled: isDisabled }),
      country: new FormControl({ value: '', disabled: isDisabled }, Validators.required),
      city: new FormControl({ value: '', disabled: isDisabled }, Validators.required),
      // ... other form controls ...
    }, { validators: this.ConfirmedValidator('password', 'confirmPassword') });
  }





  ConfirmedValidator(password: string, confirmPassword: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        matchingControl.setErrors(null)
      }
    }
  }

  submit() {
    console.log("Button clicked!");
    this.form.markAllAsTouched();

    const formData = this.form.value;

    // If on the profile page
    if (this.mode === 'profile') {
      if (!formData.password && !formData.confirmPassword) {
        // Remove the password and confirmPassword fields.
        delete formData.password;
        delete formData.confirmPassword;
      }
    }

    if (this.form.invalid) return;

    console.log(formData);

    if (this.mode === 'register') {
      // Registration logic
      this.authService.register(formData).subscribe(res => {
        this.router.navigate(['/auth/login']);
      }, error => {
        console.error('Error registering user:', error);
      });
    } else if (formData.id) {
      // Profile update logic
      this.authService.update(formData.id, formData).subscribe(res => {
        this.router.navigate(['/users']).then(() => {
          this.form.reset();
        });
      }, error => {
        console.error('Error updating user:', error);
      });
    } else {
      console.error('No user ID found for update.');
      alert("Unable to update. Invalid user data.");
    }
  }



  onEdit() {
    this.isEditable = true;
    this.form.enable();  // This will enable all form controls for editing
  }

}
