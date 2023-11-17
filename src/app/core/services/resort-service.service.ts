import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class ResortServiceService {

  
  constructor(private http:HttpClient) {

   }

   loadAllResortService(){
    return this.http.get(APIConstant.Resort.get)
   }

   saveAllResortSrvice(Obj:any){
    return this.http.post(APIConstant.Resort.Create,Obj);
   }

   updateAllResortService(Obj:any){
    return this.http.post(APIConstant.Resort.Create,Obj);
   }

   trashAllResortService(Obj:any){
    return this.http.post(APIConstant.Resort.Delete,Obj)
   }
}
