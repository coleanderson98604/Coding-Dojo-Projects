import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  Weather;
  constructor(private _http: HttpClient) { }
  apiKey = 'dd1431d8181154745ea19d7f1b64d500';
  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    let observable = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=${this.apiKey}`);
    observable.subscribe(data =>{
      console.log('heres the seattle weather', data)
      this.Weather = data
      this.Weather.image = 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1446655168/chicago-header-dg1115.jpg?itok=MqZFOaTi'
    })
  }
}
