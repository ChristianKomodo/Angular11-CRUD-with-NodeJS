import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isLoading = false;
  signupForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSignUp() {
    console.log('onSignup() called');
    if (this.signupForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(
      this.signupForm.value.email,
      this.signupForm.value.password
    );
  }
}
