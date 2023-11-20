export class bookings {
    bookingId: 0;
    customerName: string;
    mobileNo: string;
    altMobNo: string;
    serviceId: 0;
    noOfMembers: 0;
    creationDate: Date;
    isWithFood: boolean;
    bookingDate: Date;
    createdByUserId: 0;
    totalAmount: 0;
    advanceAmount: 0;
    remainingPaidAmount: 0;
    isConfirmed: boolean;
    naration: string;
    discount: 0;
    isDeleted: boolean

    constructor() {
        this.bookingId = 0;
        this.customerName = '';
        this.mobileNo = '';
        this.altMobNo = '';
        this.serviceId = 0;
        this.noOfMembers = 0;
        this.creationDate = new Date();
        this.isWithFood = true;
        this.bookingDate = new Date();
        this.createdByUserId = 0;
        this.totalAmount = 0;
        this.advanceAmount = 0;
        this.remainingPaidAmount = 0;
        this.isConfirmed = true;
        this.naration = '';
        this.discount = 0;
        this.isDeleted = true
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