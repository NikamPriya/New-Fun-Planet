import { Component,OnInit } from '@angular/core';
import { bookings } from 'src/app/core/models/classes/booking';
import { IbookingList } from 'src/app/core/models/interface/Ibooking';
import { MasterServiceService } from 'src/app/core/services/master-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
bookingList: IbookingList[]=[];
bookingObj: bookings= new bookings;

displayStyle: string = "none";


constructor(private bookingServ:MasterServiceService){}

 ngOnInit(): void {
   this.loadAllBookigs();
 }
 loadAllBookigs(){
  this.bookingServ.getAllBookings().subscribe((res:any)=>{
    this.bookingList = res.data;
  })
 }
 onEdit(id:number){
  this.bookingServ.editBooking(id).subscribe((response:any)=>{
    this.bookingObj.bookingId=response.data;
    })
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
  const isConfirm = confirm("Are you want to delete yhis booking");
  if (isConfirm) {
    this.bookingServ.onDelete(bookingId).subscribe((res:any)=>{
      if (res.result){
        alert("Booking deleted Successfully");
      } else {
        alert(res.message);
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    })
  }
}

openPopup() {
  this.displayStyle = "block"
}
closePopup() {
  this.displayStyle = "none"
  this.bookingObj = new bookings
}


}

