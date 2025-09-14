import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/theme.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   bootstrap: any;
  constructor(private toastr:ToastrService,private router:Router,public authService:AuthenticationService,public themeService:ThemeService,private googleSignIn:AngularFireAuth ) {
   
    
   }
  checkUserAuthenticated(routeVal:any)
  {
   
      this.router.navigateByUrl(routeVal.target.name)
    
   
  }
  userLogout(){
    sessionStorage.removeItem('Login');
    this.googleSignIn.signOut().then((user:any)=>{
      this.router.navigateByUrl("/login");
    })
  }
     ngOnInit(): void {

    }
   
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  closeNavbar() {
  const navbar = document.getElementById('navbarNav');
  if (navbar && navbar.classList.contains('show')) {
    new this.bootstrap.Collapse(navbar).toggle();
  }
}
}
