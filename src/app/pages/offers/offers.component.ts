import { Component, OnInit } from '@angular/core';
import { offers } from 'src/app/core/models/classes/offers';
import { Ioffers } from 'src/app/core/models/interface/Ioffers';
import { OffersService } from 'src/app/core/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit{


  isModalPopUp: String = "none";
  displayStyle: string = "none";
  offersList: Ioffers[] = [];
  offersObj: offers= new offers;
  isLoader:boolean=true;

  constructor(private offerSrv: OffersService) {
    setTimeout(() => {
      this.isLoader = false;
    }, 2000); }


  ngOnInit(): void {
    this.loadAllOffers();
  }

  loadAllOffers() {
    this.offerSrv.getAllOffers().subscribe((res: any) => {
      this.offersList = res;
    })


  }

  creatAllOffer() {
    this.offerSrv.saveOffers(this.offersObj).subscribe((res: any) => {
      if (res.result) {
        alert("Offers Added Successfully");
        this.loadAllOffers();
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

  upAllOffers() {
    this.offerSrv.onUpdate(this.offersObj).subscribe((res: any) => {
      if (res.result) {
        alert("Offers updated Successfully");
        this.loadAllOffers();
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }


  onEdit(item: any) {
    this.offersObj = item;
  }

  DeleteAllOffers(obj:any) {
    this.offerSrv.onDelete(obj).subscribe((res: any) => {
      if (res.result) {
        alert("Deleted Successfully");
        this.loadAllOffers();
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

  openPopup() {
    this.displayStyle = "block"
  }
  closePopup() {
    this.displayStyle = "none"
    this.offersObj = new offers
  }


}
