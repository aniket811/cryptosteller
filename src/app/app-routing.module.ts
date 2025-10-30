import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-authetication/login/login.component';
import { WeatherDashboardComponent } from './dashboard/weather-dashboard/weather-dashboard.component';
import { CryptoDashboardComponent } from './dashboard/crypto-dashboard/crypto-dashboard.component';
import { RegisterComponent } from './user-authetication/register/register.component';
import { AuthsguardGuard } from './guards/authsguard.guard';
import { CredentialExposureCheckComponent } from './credential-exposure-check/credential-exposure-check.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"home",component:HomeComponent ,canActivate:[AuthsguardGuard]},
  {path:'login',component:LoginComponent,canActivate:[AuthsguardGuard]},
  {path:'register',component:RegisterComponent,canActivate:[AuthsguardGuard]},
  {path:'weather',component:WeatherDashboardComponent,data:{name:'weather'}},
  {path:'crypto',component:CryptoDashboardComponent,data:{name:'crypto'},canActivate:[AuthsguardGuard]},
  {path:'breach-check',component:CredentialExposureCheckComponent,data:{name:'breach-check'},canActivate:[AuthsguardGuard]},
  {path:"**",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
