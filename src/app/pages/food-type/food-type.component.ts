import { Component, OnInit } from '@angular/core';
import { foodTypeList } from 'src/app/core/models/classes/foodItemType';
import { IFoodTypeList } from 'src/app/core/models/interface/IfoodItemType';
import { FoodTypeService } from 'src/app/core/services/food-type.service';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {

  foodTypeList: IFoodTypeList[] = [];
  foodItemTypeObj: foodTypeList = new foodTypeList();
  displayStyle: string = "none";

  isLoading: boolean = true; // Set this to false when loading is complete


  constructor(private foodTypeServ: FoodTypeService) { 
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.getAllFoodTypes();
  }

  getAllFoodTypes() {
    this.foodTypeServ.loadAllFoodTypes().subscribe((res: any) => {
      this.foodTypeList = res
    })
  }
  saveFoodTypes() {
    this.foodTypeServ.AddFoodTypes(this.foodItemTypeObj).subscribe((res: any) => {
      if (res) {
        alert("Item created successfully")
        this.getAllFoodTypes();
      } else {
        alert(res.message)
      }
      this.displayStyle = 'none';
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  OpenPopUp() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
    this.foodItemTypeObj = new foodTypeList;
  }
}
