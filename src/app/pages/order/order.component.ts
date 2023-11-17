import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/core/models/classes/order';
import { IorderList } from 'src/app/core/models/interface/Iorder';
import { MasterServiceService } from 'src/app/core/services/master-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
orderList:IorderList[]=[];
orderObj:order= new order;
userList:any[]=[];

constructor(private orderServ:MasterServiceService){}

ngOnInit(): void {
  
}



}
