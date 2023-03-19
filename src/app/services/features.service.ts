import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor(private http:HttpClient) { }
  public getWeatherData(cityName:string):Observable<any[]>{
    return this.http.get<any[]>(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4776f3cb0f67c30d16dd152487bef8b6
    `);
  }
}
