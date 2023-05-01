import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private signupService: SignupService, private fb: FormBuilder) {}
  frm!: FormGroup;
  get f() {
    return this.frm.controls;
  }

  onPost() {
    console.log(this.frm.value);
  }
  ngOnInit(): void {
    this.frm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
}
