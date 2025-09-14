import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient ) { }
  isUserLoggedIn(): boolean {
    return !!sessionStorage.getItem('Login');
  }
}
