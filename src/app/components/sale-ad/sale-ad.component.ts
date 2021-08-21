import { saleAdService } from './../../Services/saleAdService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-ad',
  templateUrl: './sale-ad.component.html',
  styleUrls: ['./sale-ad.component.css']
})
export class SaleAdComponent implements OnInit {

  constructor(
    private saleAd: saleAdService
  ) { }

  ngOnInit(): void {
    this.getAllSaleAd();
  }

  getAllSaleAd(){
      let list = this.saleAd.GetAllSaleAd();
      return list;
  }
}
