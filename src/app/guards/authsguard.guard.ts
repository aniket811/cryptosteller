import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthsguardGuard implements CanActivate {
  constructor(private authservice:AuthenticationService,private route:Router) { }
  canActivate():boolean {
    if(this.authservice.isAuthenticated.value){
      return true;
    }
    else{
      this.route.navigate(['/login']);
      return false;
    }
  }
  
}
