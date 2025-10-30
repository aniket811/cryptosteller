import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthsguardGuard implements CanActivate {
  constructor(private authservice:AuthenticationService,private route:Router,private toast:ToastrService) { }
  
canActivate(): boolean {
 const  isUserLogin = this.authservice.isUserLoggedIn();
  // if user is not logged in and trying to access login page  redirect to weather 
    if (! isUserLogin && this.authservice.getCurrentRoute() === '/login') {
        this.route.navigate(['/home']);
        return false;
    } 
    else if (isUserLogin && this.authservice.getCurrentRoute() === '/login') {
      this.route.navigate(['/weather']);
    }
    return true;
}

}
