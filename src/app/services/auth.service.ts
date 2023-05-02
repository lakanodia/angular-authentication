import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  addUsername(username: string) {
    localStorage.setItem('username', username);
  }

  addAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  isLoggedIn() {
    return !!this.getAccessToken();
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  getUsername() {
    return localStorage.getItem('username');
  }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  }
}
