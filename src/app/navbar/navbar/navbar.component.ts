import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private toastr:ToastrService,private router:Router,public themeService:ThemeService) {
   
    
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
   
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
