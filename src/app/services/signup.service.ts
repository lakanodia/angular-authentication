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
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login(model: ILoginRequestModel) {
    return this.http.post<ILoginResponseModel>(this.baseUrl + 'posts', model);
  }

  signup(model: ISignupRequestModel) {
    return this.http.post<IStatus>(this.baseUrl + 'comments', model);
  }

  changePassword(model: IChangePasswordModel) {
    return this.http.post<IStatus>(this.baseUrl + 'profile', model);
  }
}
