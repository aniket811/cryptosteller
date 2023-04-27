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
  constructor(private toastr:ToastrService,private router:Router) {
   
    
   }
  checkUserAuthenticated(routeVal:any)
  {
   
      this.router.navigateByUrl(routeVal.target.name)
    
   
  }
  userLogout(){
    sessionStorage.removeItem('username');
    location.reload();
  }
     ngOnInit(): void {

    }

}
