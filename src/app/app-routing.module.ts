import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-authetication/login/login.component';
import { WeatherDashboardComponent } from './dashboard/weather-dashboard/weather-dashboard.component';
import { CryptoDashboardComponent } from './dashboard/crypto-dashboard/crypto-dashboard.component';
import { RegisterComponent } from './user-authetication/register/register.component';
import { AuthsguardGuard } from './guards/authsguard.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'weather',component:WeatherDashboardComponent,canActivate:[AuthsguardGuard],data:{name:'weather'}},
  {path:'crypto',component:CryptoDashboardComponent,canActivate:[AuthsguardGuard],data:{name:'crypto'}},
  {path:'**',redirectTo:'/login'  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
