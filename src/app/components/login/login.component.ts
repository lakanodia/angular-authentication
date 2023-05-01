import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IStatus } from 'src/app/models/status';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  frmLogin!: FormGroup;
  status!: IStatus;

  get f() {
    return this.frmLogin.controls;
  }
  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {}

  onPost() {
    this.status = { statusCode: 0, message: 'wait..' };
    this.signupService.login(this.frmLogin.value).subscribe({
      next: (res) => {
        this.status = res;
        console.log('res', res);
        alert(`${res.message}`);
        this.frmLogin.reset();
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        this.status = err;
        alert(`Error ${err.error.message}`);
        this.frmLogin.reset();
      },
    });
  }

  ngOnInit(): void {
    this.frmLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
