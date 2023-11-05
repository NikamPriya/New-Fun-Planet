export class foodTypeList {
    foodItemTypeId: number;
    foodItemName: string;
    isDeleted: boolean

    constructor(){
        this.foodItemTypeId = 0;
        this.foodItemName = '';
        this.isDeleted = false;
    }
}
export class ReturnClass{
    message:string;
    result:boolean;
    data:any;

    constructor(){
        this.message = '';
        this.result = true;
        this.data = null;
    }
}