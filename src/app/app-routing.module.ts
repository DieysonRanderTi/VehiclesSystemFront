import { DetailsSaleAdComponent } from './components/sale-ad/details-sale-ad/details-sale-ad.component';
import { InsertSaleAdComponent } from './components/sale-ad/insert-sale-ad/insert-sale-ad.component';
import { SaleAdComponent } from './components/sale-ad/sale-ad.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: SaleAdComponent},
  {path:'insert', component: InsertSaleAdComponent},
  {path: 'details/:id', component: DetailsSaleAdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
