import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor(private http:HttpClient) { }
  public getWeatherData(cityName:string):Observable<any[]>{
    return this.http.get<any[]>(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4776f3cb0f67c30d16dd152487bef8b6&units=metric
    `);
  }
  public getCryptoNews():Observable<any[]>{
    return this.http.get<any[]>(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=ab15e7aad9e89183be5097c54e2165d764f0990d14e5763bb07294ae6a6db769`);
  }
}
