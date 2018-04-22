import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  Ledger;
  constructor(private _coin: CoinService) { }

  ngOnInit() {
    this.GrabLedger()
  }
  GrabLedger(){
    this.Ledger = this._coin.ShowCoinLedger()
  }
}
