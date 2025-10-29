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
    if (!this.authservice.isUserLoggedIn()) {
        this.route.navigate(['/login']);
        return false;
    }
    
    return true;
}
getCurrentUrlPath():string {
  console.log(this.route, "Route URL");
  return this.route.url;
}
  
}
