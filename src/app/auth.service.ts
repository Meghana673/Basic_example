import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authSubject = new Subject<boolean>();

  // isLoggedIn = false;
  // constructor() { }
  isAuthenticated(){
    return this.isLoggedIn;
  }
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }


  validateAuth(data:boolean) {

    this.authSubject.next(data);
  }


  value?:boolean;
  getAuthStatus(){
  this.authSubject.subscribe(
    data =>
    {
      console.log('inside user service: ' + data);
      this.value= data;
      console.log('inside user service 11: ' + this.value);
    }
  );
  return this.value;
}
}
