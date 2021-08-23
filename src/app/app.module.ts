import { BrowserModule } from '@angular/platform-browser';
import {  LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleAdComponent } from './components/sale-ad/sale-ad.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertSaleAdComponent } from './components/sale-ad/insert-sale-ad/insert-sale-ad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsSaleAdComponent } from './components/sale-ad/details-sale-ad/details-sale-ad.component';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SaleAdComponent,
    InsertSaleAdComponent,
    DetailsSaleAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
