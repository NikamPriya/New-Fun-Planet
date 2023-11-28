import { Component, OnInit } from '@angular/core';
import { foodOrderItem, order } from 'src/app/core/models/classes/order';
import { IbookingList } from 'src/app/core/models/interface/Ibooking';
import { IfoodItemList } from 'src/app/core/models/interface/IfoodItem';
import { IopenOrderList, IorderList } from 'src/app/core/models/interface/Iorder';
import { Iusers } from 'src/app/core/models/interface/Iusers';
import { FoodItemService } from 'src/app/core/services/food-item.service';
import { MasterServiceService } from 'src/app/core/services/master-service.service';
import { ResortServiceService } from 'src/app/core/services/resort-service.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderList: IorderList[] = [];
  orderObj: order = new order;
  foodOrderObj: foodOrderItem = new foodOrderItem;
  userList: Iusers[] = [];
  bookingList: IbookingList[] = [];
  foodItemList: IfoodItemList[] = [];
  openOrderList: IopenOrderList[]=[];
  
  openStatusObj:any={
    totalOpen:0,
    totalCanceled: 0,
    totalDelievered: 0
  }
  isOrderView:boolean=true


  displayStyle: string = "none";

  isLoading: boolean = true; // Set this to false when loading is complete


  orderView(){
    this.isOrderView=true;
  }

  openOrderView(){
    this.isOrderView=false
  }

  constructor(private orderServ: MasterServiceService, private bookingServ: MasterServiceService, private userSrv: UsersService, private foodItemSrv: FoodItemService) { 
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.getAllOrder();
    this.getAllUsers();
    this.getAllItems();
    this.getAllBooking();
    this.getOpenOrder();
    this.getOrderStatus()
  }
  
  getAllOrder() {
    this.orderServ.getOrders().subscribe((res: any) => {
      this.orderList = res;
    })
  }

  getOpenOrder(){
    this.orderServ.getOpenOrders().subscribe((res:any)=>{
      this.openOrderList=res.data;
    })
  }

  getOrderStatus(){
    this.orderServ.getStatusOrder().subscribe((res:any)=>{
      this.openStatusObj=res.data;
    })
  }
  onEdit(item: any) {
    debugger
    this.orderObj = item;
  }


  // editOrder(id: number) {
  //   debugger
  //   this.orderServ.editOrders(id).subscribe((res: any) => {
  //     this.orderObj = res;
  //   })
  // }

  saveOrder() {
    this.orderServ.addOrder(this.orderObj).subscribe((res: any) => {
      if (res.result) {
        alert(" Save Order");
        this.getAllOrder();
      } else {
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      });
  }

  updateOrder() {
    this.orderServ.updateOrders(this.orderObj).subscribe((res: any) => {
      if (res.result) {
        alert(" Update Order");
        this.getAllOrder();
      } else {
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      });
  }

  deleteOrder() {
    const isConfirm = confirm("Do you want to delete?")
    if (isConfirm) {
      this.orderServ.deleteOrders(this.orderObj).subscribe((res: any) => {
        if (res.result) {
          alert(" Delete Order");
          this.getAllOrder();
        } else {
          alert(res.message)
        }
      },
        error => {
          alert(JSON.stringify(error.error))
        });
    }
  }

  getAllUsers() {
    this.userSrv.loadAllUsers().subscribe((res: any) => {
      this.userList = res;
    })
  }

  getAllItems() {
    this.foodItemSrv.getFoodItem().subscribe((res: any) => {
      this.foodItemList = res;
    })
  }

  getAllBooking() {
    this.bookingServ.getAllBookings().subscribe((res: any) => {
      this.bookingList = res.data
    })
  }

  openPopup() {
    this.displayStyle = "block"
  }
  closePopup() {
    this.displayStyle = "none"
    this.orderObj = new order
  }












}
