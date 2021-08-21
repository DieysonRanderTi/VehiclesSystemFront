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

  GetAllSaleAd(): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/getAll`);
  }

  insertSaleAd(object){
    debugger;
    return this.http.post(`${environment.apiUrl}/insertSaleAd`, object);
  }
}
