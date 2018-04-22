import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MinecoinsComponent } from './minecoins/minecoins.component';
import { SellcoinsComponent } from './sellcoins/sellcoins.component';
import { EntryComponent } from './entry/entry.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'buy', component: BuycoinsComponent},
  { path: 'ledger', component: LedgerComponent},
  { path: 'mine', component: MinecoinsComponent},
  { path: 'sell', component: SellcoinsComponent},
  { path: 'ledger/:id', component: EntryComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
