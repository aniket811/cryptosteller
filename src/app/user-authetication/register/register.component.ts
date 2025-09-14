import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { sendEmailVerification } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  constructor(private auth:AuthenticationService,private toast:ToastrService,private route:Router, private googleSignIn:AngularFireAuth) { }
  registerForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.minLength(3)]),
    password:new FormControl('',[Validators.required,Validators.minLength(3)]),
  })
  ngOnInit(): void {
    this.auth.redirectIfAuthenticated();
  }

   registerUser(userdata: any) {
  this.googleSignIn.createUserWithEmailAndPassword(userdata.email, userdata.password)
    .then((userCredential: any) => {
      const user = userCredential.user;

      if (user) {
        sendEmailVerification(user)
          .then(() => {
            this.toast.success(
              "A verification link has been sent to your email. Please check your inbox to activate your account.",
              "Account Created"
            );
            this.route.navigate(['/login']);
          })
          .catch((error) => {
            this.toast.error(
              "Failed to send verification email. Please try again.",
              "Error"
            );
            console.error("Email verification error:", error);
          });
      }
    })
    .catch((error: any) => {
      let message = "An unexpected error occurred during registration.";

      switch (error.code) {
        case "auth/missing-email":
          message = "The email address is missing or already used.";
          break;
        case "auth/invalid-email":
          message = "The email address is not valid.";
          break;
        case "auth/email-already-in-use":
          message = "This email is already registered.";
          break;
        case "auth/weak-password":
          message = error.message;
          break;
        default:
          message = error.message;
          break;
      }

      this.toast.error(message, "Registration Failed");
    });
}

    
}
