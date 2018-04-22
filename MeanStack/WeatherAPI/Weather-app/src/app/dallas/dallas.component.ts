import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  Weather;
  constructor(private _http: HttpClient) { }
  apiKey = 'dd1431d8181154745ea19d7f1b64d500';
  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    let observable = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=Dallas,US&units=imperial&appid=${this.apiKey}`);
    observable.subscribe(data =>{
      console.log('heres the seattle weather', data)
      this.Weather = data
      this.Weather.image = 'https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    })
  }
}
