import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get(this.baseUrl + '/users');
  }
}
