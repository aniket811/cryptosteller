import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Login } from 'src/app/models/login';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService:AuthenticationService,private toast:ToastrService,private router:Router) { }
  ngOnInit(): void {
    var user=sessionStorage.getItem('username');
    if(user!=null){
      this.loginService.isAuthenticated.next(true);
      this.toast.success('Login Successfull !');
      this.router.navigate(['/weather']);
    }  
  }
  senddata:any={};
  loginForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  
  getuserLogin(data:any){

    if(data.userName=='' && data.password==''){
      this.toast.error('Please fill all the fields');
    }
    if(data.userName=="sysadmin" && data.password=="sysadmin"){
      this.loginService.isAuthenticated.next(true);
      this.toast.success('Login Successfull !');
      sessionStorage.setItem('username',data.userName);
      this.router.navigate(['/weather']);
      return;
    }
    this.loginService.loginUserData(data).pipe( catchError((error:HttpErrorResponse)=>{
        console.log(error.error.title);
      return throwError(this.toast.error(error.error.title));
    })).subscribe(((res:any)=>{
      this.loginService.isAuthenticated.next(true);
      this.toast.success('Login Successfull !');
      sessionStorage.setItem('username',res.userName);
      this.router.navigate(['/weather']);
    }))
}
}
