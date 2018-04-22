import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  { path: 'Seattle', component: SeattleComponent},
  { path: 'SanJose', component: SanJoseComponent},
  { path: 'Burbank', component: BurbankComponent},
  { path: 'Dallas', component: DallasComponent},
  { path: 'DC', component: WashingtonDcComponent},
  { path: 'Chicago', component: ChicagoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
