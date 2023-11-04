import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IweddingPackageList } from '../models/interface/Iwedding-packages';
import { APIConstant } from '../constant/APIConstant';
import { ReturnClass } from '../models/classes/wedding-packages';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http:HttpClient) { }

  getAllweddingPackages(): Observable<IweddingPackageList[]> {
    return this.http.get<IweddingPackageList[]>(APIConstant.weddingPackages.getWeddingPackages)
  }

  createUpdateWeddingPackage(weddingPackageObj: any): Observable<ReturnClass>{
    return this.http.post<ReturnClass>(APIConstant.weddingPackages.createWeddingPackage, weddingPackageObj)
  }

  updateProduct(weddingPackageObj:any): Observable<IweddingPackageList[]>{
    return this.http.post<IweddingPackageList[]>(APIConstant.weddingPackages.createWeddingPackage, weddingPackageObj)
  }

  onDelete(Id:number): Observable<IweddingPackageList[]>{
    
    return this.http.post<IweddingPackageList[]>(APIConstant.weddingPackages.deleteWeddingPackage + Id,{})
  }



}
