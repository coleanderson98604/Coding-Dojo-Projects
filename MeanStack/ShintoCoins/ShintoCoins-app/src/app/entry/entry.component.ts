import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service'; 
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  id;
  transaction;
  constructor(private _coin: CoinService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.GrabLedger()
  }
  Ledger;
  GrabLedger(){
    this._route.params.subscribe((params: Params) => {
      this.id = params['id']
      console.log(params['id'])})
    this.Ledger = this._coin.ShowCoinLedger()
    console.log(this.Ledger)
    for(var i= 0; i < this.Ledger.length; i++){
      if(this.Ledger[i].id == this.id){
        this.transaction = this.Ledger[i]
      }
    }
  }

}
