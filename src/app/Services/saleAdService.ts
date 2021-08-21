import { HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

@Injectable()

export class saleAdService implements OnInit{

  constructor(
    private http: HttpClient
  ){}

  OnInit(){

  }
  ngOnInit(){}

  GetAllSaleAd(){
    debugger;
    return this.http.get(`${environment.apiUrl}/get`)
    .subscribe((error)=>{
      if(error){
        return;
      }
      else{

      }
    })
  }
}
