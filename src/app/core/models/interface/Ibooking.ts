export interface IbookingList{
    bookingId: number;
    customerName: string;
    mobileNo: string;
    altMobNo: string;
    serviceId: number;
    noOfMembers: number;
    creationDate: Date;
    isWithFood: boolean;
    bookingDate: Date;
    createdByUserId: number;
    totalAmount: number;
    advanceAmount: number;
    remainingPaidAmount: number;
    isConfirmed: boolean;
    naration: string;
    discount: number;
    isDeleted: boolean

}