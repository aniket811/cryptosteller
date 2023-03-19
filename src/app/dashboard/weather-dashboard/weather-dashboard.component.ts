import { Component } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent {
  weatherData:any=[];
  isGetWeather:boolean=false;
    constructor(private weather:FeaturesService) { }
    getWeather(values:any){
      this.weather.getWeatherData(values.cityName).subscribe((data:any)=>{
        this.weatherData=data;
        this.isGetWeather=true;
      })
    }

}
