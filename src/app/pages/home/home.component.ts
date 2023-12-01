import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  todayVisitsList:any[]=[];
  dashBoardDataList:any[]=[];
  todayDashBoardCount:any[]=[];
  dateWiseVistList:any[]=[];

  isLoading:boolean = true;

  constructor(private homeSrv:HomeService){
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.getTodaysVisit();
    this.getDasboardData();
    this.getTodayDashboardCount();
    this.getDateWiseVisit();
  }

  getTodaysVisit(){
    this.homeSrv.onGetTodaysVisit().subscribe((res:any)=>{
      this.todayVisitsList = res;
    })
  }

  getDasboardData(){
    this.homeSrv.onGetDasboardData().subscribe((res:any)=>{
      this.dashBoardDataList = res;

    })
  }

  getTodayDashboardCount(){
    this.homeSrv.onGetTodayDashboardCount().subscribe((res:any)=>{
      this.todayDashBoardCount = res;
    })
  }
  
  getDateWiseVisit(){
    this.homeSrv.onGetDateWiseVisit().subscribe((res:any)=>{
      this.dateWiseVistList = res;
    })
  }

}
