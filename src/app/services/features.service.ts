import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  weatherapis = environment.weatherapi;
  cryptoapis = environment.cryptoapi;
  weatherapikey = environment.weatherapikey;
  cryptoapikey = environment.cryptoapikey; 
  constructor(private http: HttpClient) { }
getWeatherData(cityName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.weatherapis}/data/2.5/weather?q=${cityName}&type=city&appid=${this.weatherapikey}&units=metric
  `);
}
getCryptoNews(): Observable<any[]> {
  return this.http.get<any[]>(`${this.cryptoapis}/data/v2/news/?lang=EN&api_key=${this.cryptoapikey}`);
}
   getCryptoPrices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.cryptoapis}/data/pricemulti?fsyms=BTC,ETH,D,BNB,USDC,XRP,ARB,SHIB,TRX,BUSD&tsyms=USD,EUR,INR`)
  }
   postWeatherData(data: any): Observable<any> {
    return this.http.post<any>("http://ajosh4347-001-site1.dtempurl.com/WeatherForecast/Post", data);
  }
getBreachData(email: string): Observable<any> {
  return this.http.get<any>(`/leakcheck/api/public?check=${email}` ,{
      headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
  });
}
}
