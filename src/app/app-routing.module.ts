import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-authetication/login/login.component';
import { WeatherDashboardComponent } from './dashboard/weather-dashboard/weather-dashboard.component';
import { CryptoDashboardComponent } from './dashboard/crypto-dashboard/crypto-dashboard.component';
import { RegisterComponent } from './user-authetication/register/register.component';
import { AuthsguardGuard } from './guards/authsguard.guard';
import { CredentialExposureCheckComponent } from './credential-exposure-check/credential-exposure-check.component';
const routes: Routes = [
  {path:"",component:LoginComponent, canActivate:[AuthsguardGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'weather',component:WeatherDashboardComponent,data:{name:'weather'},canActivate:[AuthsguardGuard]},
  {path:'crypto',component:CryptoDashboardComponent,data:{name:'crypto'},canActivate:[AuthsguardGuard]},
  {path:'breach-check',component:CredentialExposureCheckComponent,data:{name:'breach-check'},canActivate:[AuthsguardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
