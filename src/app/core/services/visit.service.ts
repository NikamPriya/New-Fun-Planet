import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http:HttpClient) { }

  creatVisit(Obj:any){
    return this.http.post(APIConstant.Visit.addVisit,Obj);
  }

  updateVisit(Obj:any){
    return this.http.post(APIConstant.Visit.addVisit,Obj)
  }


}
