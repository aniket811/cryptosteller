import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient ,private router:Router) { }
  isUserLoggedIn(): boolean {
    return !!sessionStorage.getItem('Login');
  }
  redirectIfAuthenticated(){
    if(this.isUserLoggedIn()){
        this.router.navigateByUrl("/weather");
      }
    }
    getCurrentRoute():string{
      return window.location.pathname ;
    }
}
