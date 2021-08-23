import { saleAdService } from './../../../Services/saleAdService';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleAd } from 'src/app/Model/SaleAd';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details-sale-ad',
  templateUrl: './details-sale-ad.component.html',
  styleUrls: ['./details-sale-ad.component.css']
})
export class DetailsSaleAdComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  saleAd: SaleAd;
  SaleAdId: number;

  constructor(
    private route: ActivatedRoute,
    private service: saleAdService
  ) {}

  ngOnInit(): void {
    this.saleAd = new SaleAd();
    this.route.params.subscribe(params=>{
      this.SaleAdId = parseInt(params['id']);
    })

    this.getById(this.SaleAdId);
  }

  getById(id: number){
    if(id != null){
      return this.service.getOneSaleAd(id)
      .subscribe(result =>{
        if(result != null){
          this.saleAd.makeCar = result.result.data.makeCar.description;
          this.saleAd.carModel = result.result.data.carModel.description;
          this.saleAd.saleValue = result.result.data.saleValue;
          this.saleAd.fuelType = result.result.data.fuelType;
          this.saleAd.yearFabrication = result.result.data.yearFabrication;
        }
      })
    }
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
  }
}
