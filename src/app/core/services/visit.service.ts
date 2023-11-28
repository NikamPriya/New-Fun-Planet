import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http:HttpClient) { }


  getAllVisit(Obj:any){
   return this.http.post(APIConstant.vists.filterAllVisit,Obj)
  }

  getAllweddingPackages(){
    return this.http.get(APIConstant.weddingPackages.getWeddingPackages)
  }

  creatVisit(Obj:any){
    return this.http.post(APIConstant.vists.addVisit,Obj);
  }

  updateVisit(Obj:any){
    return this.http.post(APIConstant.vists.addVisit,Obj)
  }


}
