import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-sellcoins',
  templateUrl: './sellcoins.component.html',
  styleUrls: ['./sellcoins.component.css']
})
export class SellcoinsComponent implements OnInit {
  Amount: number;
  check = false;
  coinValue: number;
  transaction;
  constructor(private _coin: CoinService) { }

  ngOnInit() {
    this.Amount = 0;
    setInterval(() => this.CoinValue(),100)
  }
  Sell(){
    if(this._coin.removeCoins(this.Amount)){
      this.check = false
      console.log('made it to sell')
      this._coin.CoinLedger(this.transaction = {
        action: "Sold",
        amount: this.Amount,
        value: this._coin.showCoinsValue()
      })
    }
    else{
      this.check = true
    }
  }
  CoinValue(){
    this.coinValue = this._coin.showCoinsValue();
  }
}
