import { saleAdService } from './../../Services/saleAdService';
import { Component, OnInit } from '@angular/core';
import { SaleAd } from 'src/app/Model/SaleAd';
import { APP_BASE_HREF } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sale-ad',
  templateUrl: './sale-ad.component.html',
  styleUrls: ['./sale-ad.component.css']
})
export class SaleAdComponent implements OnInit {

  saleAds: Array<SaleAd>;
  saleAdLista = new SaleAd()

  constructor(
    private saleAd: saleAdService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getAllSaleAd();
  }

  getAllSaleAd(){
    debugger;
      this.saleAd.GetAllSaleAd()
      .subscribe((result:any)=>{
        debugger;
        if(result != null)
        this.saleAds = result;
      },
      erro=>{
        alert('Erro ao buscar os anuncios :(. Tente novamente')
      })
  }


}
