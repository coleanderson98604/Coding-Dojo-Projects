import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDcComponent implements OnInit {
  Weather;
  constructor(private _http: HttpClient) { }
  apiKey = 'dd1431d8181154745ea19d7f1b64d500';
  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    let observable = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=Washington&units=imperial&appid=${this.apiKey}`);
    observable.subscribe(data =>{
      console.log('heres the seattle weather', data)
      this.Weather = data
      this.Weather.image = 'https://fthmb.tqn.com/SJ7ydb7TT-3A0OVYr7Z3V9uHO4o=/960x0/filters:no_upscale()/capitol-building-170402241-58ddb7bf5f9b58468374c174.jpg'
    })
  }
}
