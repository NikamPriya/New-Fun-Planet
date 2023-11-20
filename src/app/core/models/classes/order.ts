export class foodOrderItem {
    orderItemId: 0;
    itemId: 0;
    quantity: 0;
    rate: 0;
    naration: string;
    orderId: 0;
    total: 0

    constructor() {
        this.orderItemId = 0;
        this.itemId = 0;
        this.quantity = 0;
        this.rate = 0;
        this.naration = '';
        this.orderId = 0;
        this.total = 0
    }

}


export class order {

    orderId: 0;
    name: string;
    mobileNo: string;
    orderDate: Date;
    orderTotal: 0;
    orderUniqeId: string;
    orderStatus: string;
    bookingId: 0;
    userId: 0;
    orderNo: 0;
    message: string;
    result: true;
    foodOrderItems: foodOrderItem[]



    constructor() {
        this.orderId = 0;
        this.name = '';
        this.mobileNo = '';
        this.orderDate = new Date();
        this.orderTotal = 0;
        this.orderUniqeId = '';
        this.orderStatus = '';
        this.bookingId = 0;
        this.userId = 0;
        this.orderNo = 0;
        this.message = '';
        this.result = true;
        this.foodOrderItems = []
    }
}