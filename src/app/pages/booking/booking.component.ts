import { Component,OnInit } from '@angular/core';
import { bookings } from 'src/app/core/models/classes/booking';
import { IbookingList } from 'src/app/core/models/interface/Ibooking';
import { IresortService } from 'src/app/core/models/interface/Iresort-Service';
import { Iusers } from 'src/app/core/models/interface/Iusers';
import { MasterServiceService } from 'src/app/core/services/master-service.service';
import { ResortServiceService } from 'src/app/core/services/resort-service.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
bookingList: IbookingList[]=[];
bookingObj: bookings= new bookings;
resortServiceList:IresortService[]=[];
usersList: Iusers[] = [];

displayStyle: string = "none";
isLoading: boolean = true; // Set this to false when loading is complete



constructor(private bookingServ:MasterServiceService, private resortSrv: ResortServiceService, private userSrv: UsersService){
  setTimeout(() => {
    this.isLoading = false;
  }, 2000);
}

 ngOnInit(): void {
   this.loadAllBookigs();
   this.getAllService();
   this.getAllUsers()
 }
 loadAllBookigs(){
  this.bookingServ.getAllBookings().subscribe((res:any)=>{
    this.bookingList = res.data;
  })
 }
//  onEdit(bookingId:number){
//   this.bookingServ.editBooking(bookingId).subscribe((response:any)=>{
//     this.bookingObj=response.data;    
//     this.bookingObj=bookingId;
//     })
//  }
onEdit(item: any) {
  debugger
  this.bookingObj = item;
}

 createNewBookings(){
  debugger;
  this.bookingServ.saveBookings(this.bookingObj).subscribe((res:any)=>{
    if(res.result) {
      alert ("New Booking Created")
      this.loadAllBookigs();
    } else {
      alert(res.message)
    }
  },
  error=>{
    alert(JSON.stringify(error.error))
  });
 }
 onUpdate(){
  this.bookingServ.updateBookings(this.bookingObj).subscribe((response:any)=>{
    if(response.result){
      alert("Booking Updated successfully")
      this.loadAllBookigs();
    } else {
      alert (response.message)
    }
  },
  error=>{
    alert(JSON.stringify(error.error))
  })
}

onDelete(bookingId:number){
  const isConfirm = confirm("Are you want to delete this booking");
  if (isConfirm) {
    this.bookingServ.deleteBooking(bookingId).subscribe((res:any)=>{
      if (res.result){
        alert("Booking deleted Successfully");
        this.loadAllBookigs();
      } else {
        alert(res.message);
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    })
  }
}

getAllService(){
  this.resortSrv.loadAllResortService().subscribe((res:any)=>{
    this.resortServiceList =res;
  })
}

getAllUsers(){
  this.userSrv.loadAllUsers().subscribe((res:any)=>{
    this.usersList=res;
  })
}

openPopup() {
  this.displayStyle = "block"
}
closePopup() {
  this.displayStyle = "none"
  this.bookingObj = new bookings
}


}

