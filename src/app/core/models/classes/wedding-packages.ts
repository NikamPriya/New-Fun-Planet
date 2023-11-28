export class weddingPackages {
    weddingPackageId: 0;
    packageName: string
    withFoodCost: null;
    withoutFoodCost: null;
    perPersonCost: null;
    rangeOfPeoples: string;
    description: string;
    createdDate: Date;
    isDeleted: boolean

    constructor(){
        this.weddingPackageId= 0,
        this.packageName= '',
        this.withFoodCost= null,
        this.withoutFoodCost=null,
        this.perPersonCost=null,
        this.rangeOfPeoples='',
        this.description= '',
        this.createdDate = new Date(),
        this. isDeleted = true
    };
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
  
  