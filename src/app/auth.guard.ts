import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private auth: AuthService) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (!this.auth.isLoggedIn()) {
//       this.router.navigate(['/login']);
//     }
//     return this.auth.isLoggedIn();
//   }

// }
isAuthenticated: boolean = false;
constructor(
  private authService: AuthService,
  private router: Router) { }

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var isAuthenticated= this.authService.authSubject.subscribe(
      data =>
      {
        console.log('next subscribed value: ' + data);
        this.isAuthenticated = data;
      })

    if ( this.isAuthenticated==false) {
      console.log('inside false ' + this.isAuthenticated);
        this.router.navigate(['/login']);
        return false;
    }else {
      console.log('next subscribed value:t3etg ' + this.isAuthenticated);


    return true;
  }
}
}
