import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Login } from 'src/app/models/login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ThemeService } from 'src/app/theme.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isUserForgottenPassword:boolean = false;
  constructor(private router:Router,private googleSignIn:AngularFireAuth,private toast:ToastrService,public themeService:ThemeService,private authService:AuthenticationService) { }
  ngOnInit(): void {
    
  }
 loginForm:any = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',Validators.minLength(3))
  });
  async loginWithGoogle(){
     try {
        const success = await this.googleSignIn.signInWithPopup(new GoogleAuthProvider());
        sessionStorage.setItem('Login', JSON.stringify(success.user));
        //redirect to page after success login
        this.router.navigateByUrl("/weather");
    } catch (err) {
        console.error('Google sign-in error:', err);
        this.toast.error("Something went wrong please try with different methods for now", "Login Error!");
    }
} 
loginWithEmailAndPassword(data:any){
  this.googleSignIn.signInWithEmailAndPassword(data.email,data.password).then((val:any)=>{
      sessionStorage.setItem('Login', JSON.stringify(val.user));
      this.router.navigateByUrl("/weather");
  }).catch((err:any)=>{
    this.toast.error("Something went wrong in our end.","Account SignInError! ")
     this.router.navigateByUrl("/login");
  });
}
forgotPassword(){ 
  this.isUserForgottenPassword== false? this.isUserForgottenPassword = true :this.isUserForgottenPassword = false;

}
sendPasswordResetEmail(email:string){
  this.googleSignIn.sendPasswordResetEmail(email).then((val:any)=>{
    this.toast.success("A password reset link has been sent to your registered email address.","Password Reset Email Sent");
    //As email sent show login fields 
    this.isUserForgottenPassword = false;
  }).catch((ex:any)=>{
    this.toast.error("Something went wrong while sending password reset email","Password Reset Error!");
  })
}
} 
