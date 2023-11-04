import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IweddingServicesList } from '../models/interface/Iwedding-servicves';
import { ReturnClass } from '../models/classes/wedding-Services';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class WeddingServicesService {

  constructor(private http: HttpClient) { }

  getAllWeddingServices(): Observable<IweddingServicesList[]> {
    return this.http.get<IweddingServicesList[]>(APIConstant.weddingServices.getWeddingServices)
  }

  AddWeddingServices(Obj: any): Observable<ReturnClass> {
    return this.http.post<ReturnClass>(APIConstant.weddingServices.addWeddingServices,Obj)
  }

  onUpdate(obj: any): Observable<IweddingServicesList[]> {
    return this.http.post<IweddingServicesList[]>(APIConstant.weddingServices.updateWeddingServices,obj)

  }
  onDeleteBtn(obj:any):Observable<IweddingServicesList[]>{
    return this.http.post<IweddingServicesList[]>(APIConstant.weddingServices.deleteWeddingServices,obj)
  }
}

