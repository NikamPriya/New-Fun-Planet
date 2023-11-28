export class foodItem {
    itemId: 0;
    itemName: string;
    isVeg: true;
    fullPrice: null;
    halfPrice: null;
    isAvailable: true;
    isHalf: true;
    foodItemTypeId: 0;
    message: string;
    result: true

    constructor (){
      this.itemId =0;
      this.itemName="";
      this.isVeg=true;
      this.fullPrice=null;
      this.halfPrice=null;
      this.isAvailable=true;
      this.isHalf=true;
      this.foodItemTypeId=0;
      this.message="";
      this.result=true;

    }
}

export class ReturnClass {

  message: string;
  result: boolean;
  data: any
  constructor() {
      this.message ='',
      this.result = false,
      this.data = null
  }
}