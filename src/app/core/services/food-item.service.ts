import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor(private http:HttpClient) { }


  getFoodItem(){
    return this.http.get(APIConstant.FoodItemList.getFoodItem);
  }

  getFoodTypeItem(){
    return this.http.get(APIConstant.FoodItemList.getAllFoodItemType);
  }

  createFoodItem(Obj:any){
    return this.http.post(APIConstant.FoodItemList.createFoodItem,Obj);
  }

  updateFoodItem(Obj:any){
    return this.http.post(APIConstant.FoodItemList.createFoodItem,Obj);
  }

  trashFoodItem(Obj:any){
    return this.http.post(APIConstant.FoodItemList.deleteFoodItem,Obj);
  }
}
