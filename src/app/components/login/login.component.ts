import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IStatus } from 'src/app/models/status';
import { AuthService } from 'src/app/services/auth.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  frmLogin!: FormGroup;
  // status!: IStatus;

  get f() {
    return this.frmLogin.controls;
  }
  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private authService: AuthService
  ) {}

  onPost() {
    // this.status = { statusCode: 0, message: 'wait..' };
    this.signupService.login(this.frmLogin.value).subscribe({
      next: (res) => {
        this.authService.addAccessToken(res.accessToken);
        this.authService.addUsername(res.user.username);
        // this.status = res;
        console.log('res', res);
        // alert(`${res.message}`);
        alert('Login Successfuly');
        this.frmLogin.reset();
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        // this.status = err;
        console.log(err);
        alert(`Error ${err.error}`);
        this.frmLogin.reset();
      },
    });
  }

  ngOnInit(): void {
    this.frmLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.authService.isLoggedIn());

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['./dashboard']);
    }
  }
}
