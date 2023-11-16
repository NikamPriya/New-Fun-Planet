import { Component, OnInit } from '@angular/core';
import { foodItem } from 'src/app/core/models/classes/foodItem';
import { IfoodItemList } from 'src/app/core/models/interface/IfoodItem';
import { FoodItemService } from 'src/app/core/services/food-item.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit{

  isModalPopUp: String = "none";
  displayStyle='none';
  foodItemList:IfoodItemList[]=[];
  foodItemObj:foodItem=new foodItem
  

  constructor(private foodItemSrv:FoodItemService){

  }
  ngOnInit(): void {
    this.onloadFoodItem();
  }

  onloadFoodItem(){
    this.foodItemSrv.getFoodItem().subscribe((res:any)=>{
      this.foodItemList = res;
    })
  }

  saveFoodItem(){
    this.foodItemSrv.createFoodItem(this.foodItemObj).subscribe((res:any)=>{
      if(res.result){
       alert("Food Item added successfully ");
       this.onloadFoodItem();
      }else{
       alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

  onUpdateFoodItem(){
    this.foodItemSrv.createFoodItem(this.foodItemObj).subscribe((res:any)=>{
      if(res.result){
       alert("Food Item updated successfully");
       this.onloadFoodItem();
      }else{
       alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

onEditFoodItem(item:any){
  this.foodItemObj =item;
}


  deleteFoodItem(item:any){
    const isDelete = confirm("Are you sure to delete");
    this.foodItemSrv.trashFoodItem(item).subscribe((res:any)=>{
      if(res.result){
       alert("Food item deleted succesfully");
       this.onloadFoodItem(); 
      }else{
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

  openModel() {
    this.isModalPopUp = 'block'
  }

  closeModel() {
    this.isModalPopUp = 'none',
    this.foodItemObj= new foodItem;
    }
  

}