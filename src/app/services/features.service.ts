import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    return this.http.get<any[]>(`${this.cryptoapis}/data/pricemulti?&tsyms=USD,EUR,INR`)
  }
   postWeatherData(data: any): Observable<any> {
    return this.http.post<any>("http://ajosh4347-001-site1.dtempurl.com/WeatherForecast/Post", data);
  }
getBreachData(email: string): Observable<any> {

  const url = 'https://leakinsight-api.p.rapidapi.com/general/';

  const headers = new HttpHeaders({
    'x-rapidapi-key': 'a86618140dmshb2c77ff4ecdd30bp1da9b4jsnf43c87115dd4',
    'x-rapidapi-host': 'leakinsight-api.p.rapidapi.com'
  });

  const params = new HttpParams()
    .set('query', email.toLowerCase())
    .set('type', 'email');

  return this.http.get<any>(url, { headers, params });
}


}
