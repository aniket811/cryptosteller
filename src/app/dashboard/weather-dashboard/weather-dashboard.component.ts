import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FeaturesService } from 'src/app/services/features.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {
  weatherData:any=[];
  isGetWeather:boolean=false;
  
    constructor(private weather:FeaturesService,private toastr:ToastrService, public themeService:ThemeService) { }
    getWeather(values:any){
      this.weather.getWeatherData(values.cityName).subscribe((data:any)=>{
        this.weatherData=data;
        this.isGetWeather=true;
      })
      this.weather.postWeatherData(values).subscribe((data:any)=>{
        this.toastr.success("Weather Data Posted Successfully !!");
      });
    }
    ngOnInit(): void {
      var continueUser=localStorage.setItem('lastroute','weather')
    }
}
