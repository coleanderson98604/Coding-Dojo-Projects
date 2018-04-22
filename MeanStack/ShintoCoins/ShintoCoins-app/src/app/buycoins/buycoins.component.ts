import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-buycoins',
  templateUrl: './buycoins.component.html',
  styleUrls: ['./buycoins.component.css']
})
export class BuycoinsComponent implements OnInit {

  constructor(private _coin: CoinService) { }
  Amount: number;
  coinValue: number;  
  transaction;
  ngOnInit() {
    this.Amount = 0;
    setInterval(() => this.CoinValue(),100)
  }
  buyCoin(){
    this._coin.CoinLedger(this.transaction = {
      action: "Bought",
      amount: this.Amount,
      value: this._coin.showCoinsValue()
    })
    this._coin.buyCoins(this.Amount);
  }
  CoinValue(){
    this.coinValue = this._coin.showCoinsValue();
  }
}
