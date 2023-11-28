export class foodOrderItem {
    orderItemId: 0;
    itemId: 0;
    quantity: null;
    rate: null;
    naration: string;
    orderId: 0;
    total: null

    constructor() {
        this.orderItemId = 0;
        this.itemId = 0;
        this.quantity = null;
        this.rate = null;
        this.naration = '';
        this.orderId = 0;
        this.total = null
    }

}


export class order {

    orderId: 0;
    name: string;
    mobileNo: string;
    orderDate: Date;
    orderTotal: null;
    orderUniqeId: string;
    orderStatus: string;
    bookingId: 0;
    userId: 0;
    orderNo: null;
    message: string;
    result: true;
    foodOrderItems: foodOrderItem[]



    constructor() {
        this.orderId = 0;
        this.name = '';
        this.mobileNo = '';
        this.orderDate = new Date();
        this.orderTotal = null;
        this.orderUniqeId = '';
        this.orderStatus = '';
        this.bookingId = 0;
        this.userId = 0;
        this.orderNo = null;
        this.message = '';
        this.result = true;
        this.foodOrderItems = []
    }
}