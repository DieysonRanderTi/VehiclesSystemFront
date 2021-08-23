import { HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class saleAdService{

  constructor(
    private http: HttpClient
  ){}
//Inicio Metodos de anúncios
  GetAllSaleAd(): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/getAll`);
  }

  getOneSaleAd(id): Observable<any>{
    return this.http.get(`${environment.apiUrl}/get/`+ id)
  }

  insertSaleAd(object){
    return this.http.post(`${environment.apiUrl}/insertSaleAd`, object);
  }
  //Fim Metodos de anúncios

  //Início Metodos de Marca e Modelo

  getAllMakeCar(): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/getAllMakeCar`);
  }
  //Fim Metodos de Marca e Modelo
  getAllCarModel(): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/getAllCarModel`);
  }
}
