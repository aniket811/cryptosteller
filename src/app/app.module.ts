import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDashboardComponent } from './dashboard/weather-dashboard/weather-dashboard.component';
import { CryptoDashboardComponent } from './dashboard/crypto-dashboard/crypto-dashboard.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './user-authetication/login/login.component';
import { RegisterComponent } from './user-authetication/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationService } from './services/authentication.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    WeatherDashboardComponent,
    CryptoDashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        
      },
    )
   
  ],
  providers: [ToastrService,NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
