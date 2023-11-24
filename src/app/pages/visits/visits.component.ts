import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { visit, visitObj} from 'src/app/core/models/classes/visits';
import { IresortService } from 'src/app/core/models/interface/Iresort-Service';
import { Iusers } from 'src/app/core/models/interface/Iusers';
import { IweddingPackageList } from 'src/app/core/models/interface/Iwedding-packages';
import { ResortServiceService } from 'src/app/core/services/resort-service.service';
import { UsersService } from 'src/app/core/services/users.service';
import { VisitService } from 'src/app/core/services/visit.service';


@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit{
  isModalPopUp: String = "none";
  displayStyle='none';

  allVisit:any[]=[];
  filterAllVisitObj:visitObj= new visitObj;
 
  visitObj:visit=new visit ;

  packageList:IweddingPackageList[]=[];
  usersList:Iusers[]=[];
  resortServiceList:IresortService[]=[];

constructor(private visitSrv:VisitService,private userSrv: UsersService,private resortSrv: ResortServiceService){}
ngOnInit(): void {
  this.loadweddingPackages();
  this.getAllUsers();
  this.getAllResortService();
  this.filterAllVisits();
}

filterAllVisits(){
  this.visitSrv.getAllVisit(this.filterAllVisitObj).subscribe((res:any)=>{
    this.allVisit =res;
  })
}



loadweddingPackages() {
  debugger;
  this.visitSrv.getAllweddingPackages().subscribe((res: any) => {
    this.packageList = res;
    console.log(this.packageList)
  })
}

getAllUsers() {
  this.userSrv.loadAllUsers().subscribe((res: any) => {
    this.usersList = res;
  })
}

getAllResortService() {
  this.resortSrv.loadAllResortService().subscribe((res: any) => {
    this.resortServiceList = res;
  })
}

<<<<<<< HEAD
// addVisit(){
//   this.visitSrv.creatVisit(this.visitObj).subscribe((res:any)=>{
//     if(res.result){
//      alert("Visit Added Successfully")
//     }else{
//       alert(res.message)
//     }
//   })
// }

// onUpdateVisit(){
//   this.visitSrv.updateVisit(this.visitObj).subscribe((res:any)=>{
//     if(res.result){
//      alert("Visit updated Successfully")
//     }else{
//       alert(res.message)
//     }
//   })
// }
=======
addVisit(){
  this.visitSrv.creatVisit(this.visitObj).subscribe((res:any)=>{
    if(res.result){
     alert("Visit Added Successfully");
     this.filterAllVisits();
    }else{
      alert(res.message)
    }
  })
}

onUpdateVisit(){
  this.visitSrv.updateVisit(this.visitObj).subscribe((res:any)=>{
    if(res.result){
     alert("Visit updated Successfully");
     this.filterAllVisits();
    }else{
      alert(res.message)
    }
  })
}
>>>>>>> 4c3ac3200f492df029da5c897d25b417760d57c6

onEdit(item:any){
  this.visitObj = item
}

openModel() {
  this.isModalPopUp = 'block'
}

closeModel() {
  this.isModalPopUp = 'none',
  this.visitObj = new visit;
  }




}
