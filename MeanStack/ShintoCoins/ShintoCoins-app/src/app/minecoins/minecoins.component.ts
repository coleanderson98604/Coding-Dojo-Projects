import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-minecoins',
  templateUrl: './minecoins.component.html',
  styleUrls: ['./minecoins.component.css']
})
export class MinecoinsComponent implements OnInit {
  Question;
  transaction;
  constructor(private _coin: CoinService) { }

  ngOnInit() {
    this.Question = {
      answer: ""
    }
    this.transaction = {}
  }
  MineCoin(){
    if(this.Question.answer == "420"){
      console.log("correctly added coins")
      this._coin.addCoins();
      this._coin.showCoins();
      this.transaction = {
        action: "Mined",
        amount: 1,
        value: this._coin.showCoinsValue()
      }
      this._coin.CoinLedger(this.transaction);
    }
    else {
      this.Question.answer = "";
    }
  }
}
