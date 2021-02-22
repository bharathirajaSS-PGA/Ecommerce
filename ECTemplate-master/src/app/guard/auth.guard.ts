import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //constructor initialization
  constructor(private authService: AuthService,   private router: Router){  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLoggednIn()){
      //  return true
        var currentUser = this.authService.currentUserValue;
        console.log(currentUser)
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
          // role not authorised so redirect to home page
          this.router.navigate(['/']);
          return false;
        }
        return true
      }else{
        this.router.navigate(["login"]);
        return false;
      }
  }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.authService.currentUserValue;
  //   if (currentUser) {
  //       // check if route is restricted by role
  //       if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
  //           // role not authorised so redirect to home page
  //           this.router.navigate(['/']);
  //           return false;
  //       }

  //       // authorised so return true
  //       return true;
  //   }

    // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
// }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.authService.isLoggednIn())
      if(this.authService.isLoggednIn()){
        return true;
      }else{
        this.router.navigate(["login"]);
        return false;
      }
  }
}
