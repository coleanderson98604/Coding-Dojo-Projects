import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'product-new', component: ProductComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-list/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
