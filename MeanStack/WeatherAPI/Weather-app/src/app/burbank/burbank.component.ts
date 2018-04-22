import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  Weather;
  constructor(private _http: HttpClient) { }
  apiKey = 'dd1431d8181154745ea19d7f1b64d500';
  ngOnInit() {
    this.getWeather()
  }
  getWeather(){
    let observable = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=Burbank,US&units=imperial&appid=${this.apiKey}`);
    observable.subscribe(data =>{
      this.Weather = data
      this.Weather.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Burbank_media_district_from_Griffith_Park_2015-11-07.jpg/1200px-Burbank_media_district_from_Griffith_Park_2015-11-07.jpg'
    })
  }
}
