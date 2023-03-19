import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedin:boolean=false;
  constructor(private auth:AuthenticationService,private toastr:ToastrService,private router:Router) {
    this.auth.isAuthenticated.subscribe((data:any)=>{
      this.isLoggedin=data;
    })
    
   }
  checkUserAuthenticated(routeVal:any)
  {
    
    if(this.isLoggedin)
    {
      this.auth.isAuthenticated.next(true);
      this.router.navigateByUrl(routeVal.target.name)
    }
    else{
      this.auth.isAuthenticated.next(false);
      this.toastr.error("You are not logged in")
    }
  }
  userLogout(){
    sessionStorage.removeItem('username');
    location.reload();
  }
     ngOnInit(): void {

    }

}
