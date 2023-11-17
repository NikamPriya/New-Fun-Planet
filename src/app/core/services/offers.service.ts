import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http:HttpClient) { }

  // loadAllOffers(){
  //   return this.http.get(APIConstant.Offers.getOffers)
  //  }

  //  saveAllOffers(Obj:any){
  //   return this.http.post(APIConstant.Offers.createOffers,Obj);
  //  }

  //  updateAllOffers(Obj:any){
  //   return this.http.post(APIConstant.Offers.createOffers,Obj);
  //  }

  //  DeleteAllOffers(Obj:any){
  //   return this.http.post(APIConstant.Offers.deleteOffers,Obj)
  //  }
}
