import { importProvidersFrom, NgModule } from '@angular/core';
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
import {  initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {  getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationService } from './services/authentication.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from '@angular/fire/compat';
import { AiassistantComponent } from './aiassistant/aiassistant.component';
import { CredentialExposureCheckComponent } from './credential-exposure-check/credential-exposure-check.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherDashboardComponent,
    CryptoDashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AiassistantComponent,
    CredentialExposureCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        
      },
    ),

  ],
  providers: [ToastrService,NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }


