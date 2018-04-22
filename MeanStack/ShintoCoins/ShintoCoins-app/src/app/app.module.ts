import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MinecoinsComponent } from './minecoins/minecoins.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';
import { SellcoinsComponent } from './sellcoins/sellcoins.component';
import { LedgerComponent } from './ledger/ledger.component';
import { CoinService } from './coin.service';
import { FormsModule } from '@angular/forms';
import { EntryComponent } from './entry/entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinecoinsComponent,
    BuycoinsComponent,
    SellcoinsComponent,
    LedgerComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
