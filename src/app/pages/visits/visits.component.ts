import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { visit } from 'src/app/core/models/classes/visits';
import { VisitService } from 'src/app/core/services/visit.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit{
  isModalPopUp: String = "none";
  displayStyle='none';
 visitObj:visit=new visit 

constructor(private visitSrv:VisitService){}
ngOnInit(): void {
  
}

addVisit(){
  this.visitSrv.creatVisit(this.visitObj).subscribe((res:any)=>{
    if(res.result){
     alert("Visit Added Successfully")
    }else{
      alert(res.message)
    }
  })
}

onUpdateVisit(){
  this.visitSrv.updateVisit(this.visitObj).subscribe((res:any)=>{
    if(res.result){
     alert("Visit updated Successfully")
    }else{
      alert(res.message)
    }
  })
}

openModel() {
  this.isModalPopUp = 'block'
}

closeModel() {
  this.isModalPopUp = 'none',
  this.visitObj= new visit;
  }




}
