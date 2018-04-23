import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.grabProducts()
  }
  grabProducts(){
    let observable = this._http.getProduct();
    observable.subscribe(data => {
      console.log('data here', data);
      let cointainer = data['data'];
      var random = Math.floor(Math.random()*(cointainer.length - 0))
      this.item = cointainer[random];
    })
  }

}
