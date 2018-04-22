import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  Weather;
  constructor(private _http: HttpClient) { }
  apiKey = 'dd1431d8181154745ea19d7f1b64d500';
  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    let observable = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=San jose,US&units=imperial&appid=${this.apiKey}`);
    observable.subscribe(data =>{
      this.Weather = data
      this.Weather.image = 'https://specials-images.forbesimg.com/imageserve/685367242/960x0.jpg?fit=scale'
    })
  }
}
