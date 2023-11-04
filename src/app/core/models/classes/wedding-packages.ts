export class weddingPackages {
    weddingPackageId: 0;
    packageName: string
    withFoodCost: 0;
    withoutFoodCost: 0;
    perPersonCost: 0;
    rangeOfPeoples: string;
    description: string;
    createdDate: Date;
    isDeleted: boolean

    constructor(){
        this.weddingPackageId= 0,
        this.packageName= '',
        this.withFoodCost= 0,
        this.withoutFoodCost= 0,
        this.perPersonCost= 0,
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
  
  