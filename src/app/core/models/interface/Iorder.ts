export interface IorderList{
  orderId: number,
  name: string,
  mobileNo: string,
  orderDate: Date,
  orderTotal: number,
  orderUniqeId: string,
  orderStatus: string,
  bookingId: number,
  userId: number,
  orderNo: number,
  message: string,
  result: true,
  foodOrderItems: [
    {
      OrderItemId: number,
      ItemId: number,
      Quantity: number,
      Rate: number,
      Naration: string,
      OrderId: number,
      Total: number
    }
  ]
}