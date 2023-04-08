import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(`Form valid? ${this.loginForm.valid}`);
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
