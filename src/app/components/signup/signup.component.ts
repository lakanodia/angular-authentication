import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validPattern } from 'src/app/_helpers/patter-match.validator';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { IStatus } from 'src/app/models/status';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  frm!: FormGroup;
  // status!: IStatus;

  get f() {
    return this.frm.controls;
  }

  onPost() {
    // this.status = { statusCode: 0, message: 'wait..' };
    this.signupService.signup(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        // this.status = res;
        // alert(`${res.message}`);
        alert('You registered successfully');
        this.frm.reset();
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err.error);
        // this.status = err;
        alert(`Error ${err.error}`);
        this.frm.reset();
      },
    });
  }
  ngOnInit(): void {
    const patternRegex = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$'
    );
    this.frm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, validPattern(patternRegex)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
}
