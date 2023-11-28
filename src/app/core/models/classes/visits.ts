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
    noOfMembers: null;
    totalAmount: null;
    serviceId: 0;
    service: string;
    advance: null;
    remaining: null;
    adults: null;
    childrens: null;
    rate: null;
    adultRate: null;
    childRate: null;
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
        this.noOfMembers = null;
        this.totalAmount = null;
        this.serviceId = 0;
        this.service = '';
        this.advance = null;
        this.remaining = null;
        this.adults = null;
        this.childrens = null;
        this.rate = null;
        this.adultRate = null;
        this.childRate = null;
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

