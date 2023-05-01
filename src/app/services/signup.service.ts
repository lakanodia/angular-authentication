import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISignupRequestModel } from '../models/signupModel';
import { ILoginRequestModel } from '../models/loginModel';
import { IStatus } from '../models/status';
import { IChangePasswordModel } from '../models/change-password';
import { ILoginResponseModel } from '../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  public baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login(model: ILoginRequestModel) {
    return this.http.post<IStatus>(this.baseUrl + '/login', model);
  }

  signup(model: ISignupRequestModel) {
    return this.http.post<IStatus>(this.baseUrl + '/signup', model);
  }

  // changePassword(model: IChangePasswordModel) {
  //   return this.http.post<IStatus>(this.baseUrl + 'profile', model);
  // }
}
