import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth:AuthenticationService,private toast:ToastrService,private route:Router) { }
  registerForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.minLength(3)]),
    password:new FormControl('',[Validators.required,Validators.minLength(3)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(3)]),
  })
  registerUser(userdata:any){
    debugger
    this.auth.registerUserData(userdata).pipe( catchError((error:HttpErrorResponse)=>{
      if(error.error instanceof ErrorEvent){
        this.toast.error(error.error.message);
      }
      return throwError(this.toast.error(error.error.message));
    }))
    .subscribe((data:any)=>{
      console.log(data);
      this.toast.success("User Registered Successfully !!");
      this.route.navigate(['/login']);
    })
  }
}
