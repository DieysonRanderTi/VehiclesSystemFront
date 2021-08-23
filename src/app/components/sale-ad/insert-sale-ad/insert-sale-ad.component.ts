import { MakeCar } from '../../../Model/MakeCar';
import { saleAdService } from './../../../Services/saleAdService';
import { Component, OnInit } from '@angular/core';
import { SaleAd } from 'src/app/Model/SaleAd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarModel } from 'src/app/Model/CarModel';

@Component({
  selector: 'app-insert-sale-ad',
  templateUrl: './insert-sale-ad.component.html',
  styleUrls: ['./insert-sale-ad.component.css'],
  providers:[saleAdService]
})
export class InsertSaleAdComponent implements OnInit {

  insertSaleAdForm: FormGroup;
  saleAd = new SaleAd;
  makeCar: MakeCar[];
  carModel: CarModel[];
  makecarId: number;
  carModelId: number;

  constructor(
    private fb: FormBuilder,
    public saleAdService: saleAdService
  ) {
   }

  ngOnInit(): void {
    this.initForm();
    this.getCarModel();
    this.getMakeCar();
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
    var selectMake = (<HTMLSelectElement>document.getElementById("makeId")).value;
    this.makecarId = parseInt(selectMake);

    var selectModel = (<HTMLSelectElement>document.getElementById("modelId")).value;
    this.carModelId = parseInt(selectModel);
    let ad={
      "makeCarId": this.makecarId,
      "carModelId": this.carModelId,
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
        alert('Anúncio cadastrado com sucesso! :)')
      }
    },
    erro =>{
      alert('Erro ao cadastrar o anúncio.' + erro)
    })
  }
  SetIdCarModel(id: number){
    debugger;
    return id;
  }
  getMakeCar(){
    debugger;
    this.saleAdService.getAllMakeCar()
    .subscribe(result =>{
      debugger;
      if(result != null){
        this.makeCar = result;
      }
    })
  }
  getCarModel(){
    debugger;
    this.saleAdService.getAllCarModel()
    .subscribe(result =>{
      if(result != null){
        this.carModel = result;
      }
    })
  }
}
