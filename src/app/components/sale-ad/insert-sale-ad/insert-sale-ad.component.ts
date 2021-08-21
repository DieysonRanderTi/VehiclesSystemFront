import { saleAdService } from './../../../Services/saleAdService';
import { Component, OnInit } from '@angular/core';
import { SaleAd } from 'src/app/Model/SaleAd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-sale-ad',
  templateUrl: './insert-sale-ad.component.html',
  styleUrls: ['./insert-sale-ad.component.css']
})
export class InsertSaleAdComponent implements OnInit {

  insertSaleAdForm: FormGroup;
  saleAd = new SaleAd;

  constructor(
    private fb: FormBuilder,
    public saleAdService: saleAdService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get f(){
    return this.insertSaleAdForm.controls;
  }

  initForm(){
    this.insertSaleAdForm = this.fb.group({
      makeCarId:[
        null,
        Validators.required
      ],
      carModelId:[
        null,
        Validators.required
      ],
      yearFabrication:[
        null,
        Validators.required
      ],
      saleDate:[
        null,
        Validators.required
      ],
      buyValue:[
        null,
        Validators.required
      ],
      saleValue:[
        null,
        Validators.required
      ],
      color:[
        null,
        Validators.required
      ],
      fuelType:[
        null,
        Validators.required
      ]
    })
  }

  insertSaleAd(){
  debugger;
    let ad={
      "makeCarId": this.f.makeCarId.value,
      "carModelId": this.f.carModelId.value,
      "yearFabrication":this.f.yearFabrication.value,
      "saleDate":this.f.saleDate.value,
      "buyValue": this.f.buyValue.value,
      "saleValue": this.f.saleValue.value,
      "color": this.f.color.value,
      "fuelType": this.f.fuelType.value
      }

    this.saleAdService.insertSaleAd(ad).
    subscribe(result =>{
      if(result != null){
        debugger;
        alert('Anúncio cadastrado com sucesso! :)')
      }
    },
    erro =>{
      alert('Erro ao cadastrar o anúncio.' + erro)
    })


  }
}
