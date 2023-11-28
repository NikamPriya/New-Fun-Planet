export class bookings {
    bookingId: 0;
    customerName: string;
    mobileNo: string;
    altMobNo: string;
    serviceId: 0;
    noOfMembers: null;
    creationDate: Date;
    isWithFood: boolean;
    bookingDate: Date;
    createdByUserId: 0;
    totalAmount: null;
    advanceAmount: null;
    remainingPaidAmount: null;
    isConfirmed: boolean;
    naration: string;
    discount: null;
    isDeleted: boolean

    constructor() {
        this.bookingId = 0;
        this.customerName = '';
        this.mobileNo = '';
        this.altMobNo = '';
        this.serviceId = 0;
        this.noOfMembers = null;
        this.creationDate = new Date();
        this.isWithFood = true;
        this.bookingDate = new Date();
        this.createdByUserId = 0;
        this.totalAmount = null;
        this.advanceAmount = null;
        this.remainingPaidAmount = null;
        this.isConfirmed = true;
        this.naration = '';
        this.discount = null;
        this.isDeleted = false
    };
}

export class ReturnClass {
    message: string;
    result: boolean;
    data: any;

    constructor() {
        this.message = '',
            this.result = true,
            this.data = null
  }

}