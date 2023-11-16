import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFoodTypeList } from '../models/interface/IfoodItemType';
import { Observable } from 'rxjs';
import { APIConstant } from '../constant/APIConstant';
import { ReturnClass } from '../models/classes/foodItemType';

@Injectable({
  providedIn: 'root'
})
export class FoodTypeService  {

  constructor(private http :HttpClient) { }


  loadAllFoodTypes():Observable<IFoodTypeList[]>{
    return this.http.get<IFoodTypeList[]>(APIConstant.foodItemType.getAllFoodItemType)
  }

  AddFoodTypes(Obj:any):Observable<ReturnClass>{
    return this.http.post<ReturnClass>(APIConstant.foodItemType.addFoodItemType,Obj)
    
  }

}
