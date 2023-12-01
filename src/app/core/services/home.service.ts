import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  onGetTodaysVisit(){
    return this.http.get(APIConstant.home.GetTodaysVisit);
  }

  onGetDasboardData(){
    return this.http.get(APIConstant.home.GetDasboardData);
  }

  onGetTodayDashboardCount(){
    return this.http.get(APIConstant.home.getTodayDashboardCount);
  }

  onGetDateWiseVisit(){
    return this.http.get(APIConstant.home.getDateWiseVisit);
  }
}
