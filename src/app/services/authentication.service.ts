import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient ) { }
  headers=new HttpHeaders().set('Access-Control-Allow-Origin','*').set('Access-Control-Check','*');
  // Method for Registering User
   registerUserData(data:any):Observable<any>{
     return this.http.post<any>('http://aniket811-001-site1.itempurl.com/api/Account/Register',data,{headers:this.headers});
    }
    
    // Method for Login User
    loginUserData(data:any):Observable<any>{
      return this.http.post<any>('http://aniket811-001-site1.itempurl.com/api/Account/Login',data,{headers:this.headers});
    }

}
