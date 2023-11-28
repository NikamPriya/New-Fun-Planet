import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resortServices } from 'src/app/core/models/classes/resortService';
import { IresortService } from 'src/app/core/models/interface/Iresort-Service';
import { ResortServiceService } from 'src/app/core/services/resort-service.service';

@Component({
  selector: 'app-resort-services',
  templateUrl: './resort-services.component.html',
  styleUrls: ['./resort-services.component.css']
})
export class ResortServicesComponent implements OnInit {

  isModalPopUp: String = "none";
  displayStyle='none';
  resortServiceList: IresortService[] = [];
  resortServiceObj: resortServices= new resortServices;

  constructor(private http: HttpClient, private resortSrv: ResortServiceService) { }

  ngOnInit(): void {
    this.getAllResortService();
  }

  getAllResortService() {
    this.resortSrv.loadAllResortService().subscribe((res: any) => {
      this.resortServiceList = res;
    })
  }

  creatAllResortSrvice() {
    this.resortSrv.saveAllResortSrvice(this.resortServiceObj).subscribe((res: any) => {
      if (res.result) {
        alert("Resort Srvice Added Successfully");
        this.getAllResortService();
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

  upAllResortSrvice() {
    this.resortSrv.updateAllResortService(this.resortServiceObj).subscribe((res: any) => {
      if (res.result) {
        alert("Resort Srvice updated Successfully");
        this.getAllResortService();
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
    this.resortServiceObj = item;
  }

  deletAllResortService(item:any) {
    
    const isConfirm = confirm("Are you sure to delete")
    if (isConfirm) {
    this.resortSrv.trashAllResortService(item).subscribe((res: any) => {
      if (res.result) {
        alert("Deleted Successfully");
        this.getAllResortService();
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }
  }

  openModel() {
    this.isModalPopUp = 'block'
  }

  closeModel() {
    this.isModalPopUp = 'none',
    this.resortServiceObj= new resortServices;
    }
  }


