export class offers {
  offerId: 0;
  offerName: string;
  offerDetails: string;
  createdDate: Date;
  isDeleted: boolean;
  isActive: boolean;
  amount:0;


  constructor(){

    this.offerId= 0,
    this.offerName= '',
    this.isActive=true,
    this.isDeleted=true,
    this.createdDate=new Date(),
    this.offerDetails='',
    this.amount=0
  }
}

export class ReturnClass {
  message: string;
  result: boolean;
  data: any;

  constructor() {
      this.message = '';
      this.data = null;
      this.result =true;
    }
}
