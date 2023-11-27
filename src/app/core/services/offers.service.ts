import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';
import { Observable } from 'rxjs';
import { Ioffers } from '../models/interface/Ioffers';
import { ReturnClass } from '../models/classes/wedding-packages';


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http:HttpClient) { }

  getAllOffers(): Observable<Ioffers[]> {
    return this.http.get<Ioffers[]>(APIConstant.Offers.getOffers)
  }

  saveOffers(Obj: any): Observable<ReturnClass> {
    return this.http.post<ReturnClass>(APIConstant.Offers.createOffers,Obj)
  }

  onUpdate(obj: any): Observable<Ioffers[]> {
    return this.http.post<Ioffers[]>(APIConstant.Offers.createOffers,obj)

  }
  onDelete(obj:any):Observable<Ioffers[]>{
    return this.http.post<Ioffers[]>(APIConstant.Offers.deleteOffers,obj)
  }
}
