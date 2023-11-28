export class visit {
    visitId: 0;
    customerId: 0;
    packageId: 0;
    discount: 0;
    name: string;
    mobile: string;
    emailId: string;
    city: string;
    ticketNo: string;
    ticketDate: Date;
    isDelete: true;
    createDate: Date;
    remainingPaidAmt: 0;
    reference: 0;
    referenceMode: string;
    paymentBy: string;
    paymentDetails: string;
    isAdvance: true;
    userId: 0;
    user: string;
    noOfMembers: 0;
    totalAmount: 0;
    serviceId: 0;
    service: string;
    advance: 0;
    remaining: 0;
    adults: 0;
    childrens: 0;
    rate: 0;
    adultRate: 0;
    childRate: 0;
    bookingUId: string;
    bookingToDate: Date;
    cityOthr: string;
    isDone: true;
    isConfirm: string;
    confirmDate: Date;
    reason: string;
    message: string;
    result: true;

    constructor() {
        this.visitId = 0;
        this.customerId = 0;
        this.packageId = 0;
        this.discount = 0;
        this.name = '';
        this.mobile = '';
        this.emailId = '';
        this.city = '';
        this.ticketNo = '';
        this.ticketDate = new Date();
        this.isDelete = true;
        this.createDate = new Date();
        this.remainingPaidAmt = 0;
        this.reference = 0;
        this.referenceMode = '';
        this.paymentBy = '';
        this.paymentDetails = '';
        this.isAdvance = true;
        this.userId = 0;
        this.user = '';
        this.noOfMembers = 0;
        this.totalAmount = 0;
        this.serviceId = 0;
        this.service = '';
        this.advance = 0;
        this.remaining = 0;
        this.adults = 0;
        this.childrens = 0;
        this.rate = 0;
        this.adultRate = 0;
        this.childRate = 0;
        this.bookingUId = '';
        this.bookingToDate = new Date();
        this.cityOthr = '';
        this.isDone = true;
        this.isConfirm = '';
        this.confirmDate = new Date();
        this.reason = '';
        this.message = '';
        this.result = true;


    }
}

export class visitObj{
  name: string;
  userId?: any;
  contactNo: string;
  frDate: any;
  toDate: any;
  serviceId: any;
  bookingUId: any;
  ticketNo:string;
  isDone: boolean


  constructor(){
  this.name ='';
  this.userId=null;
  this.contactNo='';
  this.frDate='';
  this.toDate='';
  this.serviceId=null;
  this.bookingUId='';
  this.ticketNo='';
  this.isDone=true;
  }
}

