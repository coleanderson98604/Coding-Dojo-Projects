import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coins: number;
  constructor(private _coin: CoinService) { }

  ngOnInit() {
    setInterval(() => this.show(),100)
  }
  show(){
    this.coins = this._coin.showCoins();
  }
}
