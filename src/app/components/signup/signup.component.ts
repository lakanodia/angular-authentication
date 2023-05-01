import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validPattern } from 'src/app/_helpers/patter-match.validator';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { IStatus } from 'src/app/models/status';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private signupService: SignupService, private fb: FormBuilder) {}
  frm!: FormGroup;
  status!: IStatus;

  get f() {
    return this.frm.controls;
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait..' };
    this.signupService.signup(this.frm.value).subscribe({
      next: (res) => {
        this.status = res;
        alert(`${res.message}`);
        this.frm.reset();
      },
      error: (err) => {
        this.status = err;
        alert(`Error ${err.error.message}`);
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
