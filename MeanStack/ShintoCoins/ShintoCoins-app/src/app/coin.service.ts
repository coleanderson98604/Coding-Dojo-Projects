import { Injectable, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinService {

  constructor() { }
  coins;
  coinValue;
  Ledger = []
  id = 1;
  ngOnInit(){
    this.coins;
    this.coinValue;
    this.Ledger;
  }
  showCoins(){
    if(this.coins == undefined){
      this.coins = 0;
    }
    if(this.coinValue == undefined){
      this.coinValue = 1.00
    }
    return this.coins;
  }
  showCoinsValue(){
    return this.coinValue = parseFloat(this.coinValue.toFixed(2))
  }
  addCoins(){
    this.coins= this.coins + 1;
    this.coinValue += 0.05
  }
  removeCoins(amount){
    console.log(amount)
    if(amount >= 0 && this.coins >= amount && this.coins != 0){
      this.coins -= amount;
      while(amount > 0){
        this.coinValue -= 0.10
        amount--
      }
      this.coinValue = parseFloat(this.coinValue.toFixed(2))
      return this.coins
    }
    else {
      return false
    }
  }
  buyCoins(amount){
    if(amount > 0){
      this.coins += amount;
      while(amount > 0){
        this.coinValue += 0.10
        amount--
      }
      this.coinValue = parseFloat(this.coinValue.toFixed(2))
      return this.coins
    }
    else {
      return false
    }
  }
  CoinLedger(transaction){
    transaction.id = this.id
    this.id += 1
    this.Ledger.push(transaction);
    console.log(this.Ledger);
  }
  ShowCoinLedger(){
    return this.Ledger
  }
}
