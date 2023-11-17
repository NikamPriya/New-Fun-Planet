import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {


  // isModalPopUp: String = "none";
  // displayStyle: string = "none";
  // offersList: Ioffers[] = [];
  // offersObj: offers= new offers;

  // constructor(private offerSrv: OffersService) { }

  // ngOnInit(): void {
  //   this.getAllOffer();
  // }

  // getAllOffer() {
  //   this.offerSrv.loadAllOffers().subscribe((res: any) => {
  //     this.offersList = res;
  //   })
  // }

  // creatAllOffer() {
  //   this.offerSrv.saveAllOffers(this.offersObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Offers Added Successfully");
  //       this.getAllOffer();
  //     } else {
  //       alert(res.message)
  //     }
  //   },
  //   error=>{
  //     alert(JSON.stringify(error.error))
  //   }
  //   )
  // }

  // upAllOffers() {
  //   this.offerSrv.updateAllOffers(this.offersObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Offers updated Successfully");
  //       this.getAllOffer();
  //     } else {
  //       alert(res.message)
  //     }
  //   },
  //   error=>{
  //     alert(JSON.stringify(error.error))
  //   }
  //   )
  // }


  // onEdit(item: any) {
  //   this.offersObj = item;
  // }

  // DeleteAllOffers(item:any) {
  //   debugger;
  //   const isDelete = confirm("Are you sure to delete")
  //   this.offerSrv.DeleteAllOffers(item).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Deleted Successfully");
  //       this.getAllOffer();
  //     } else {
  //       alert(res.message)
  //     }
  //   },
  //   error=>{
  //     alert(JSON.stringify(error.error))
  //   }
  //   )
  // }

  // openPopup() {
  //   this.displayStyle = "block"
  // }
  // closePopup() {
  //   this.displayStyle = "none"
  //   this.offersObj = new offers
  // }

}
