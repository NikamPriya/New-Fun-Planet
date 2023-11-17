import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IweddingPackageList } from '../models/interface/Iwedding-packages';
import { APIConstant } from '../constant/APIConstant';
import { ReturnClass } from '../models/classes/wedding-packages';
import { IbookingList } from '../models/interface/Ibooking';
import { AppComponent } from 'src/app/app.component';
import { IorderList } from '../models/interface/Iorder';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http: HttpClient) { }
  // weddingPackage
  getAllweddingPackages(): Observable<IweddingPackageList[]> {
    return this.http.get<IweddingPackageList[]>(APIConstant.weddingPackages.getWeddingPackages)
  }
  createUpdateWeddingPackage(weddingPackageObj: any): Observable<ReturnClass> {
    return this.http.post<ReturnClass>(APIConstant.weddingPackages.createWeddingPackage, weddingPackageObj)
  }
  updateProduct(weddingPackageObj: any): Observable<IweddingPackageList[]> {
    return this.http.post<IweddingPackageList[]>(APIConstant.weddingPackages.createWeddingPackage, weddingPackageObj)
  }
  onDelete(Id: number): Observable<IweddingPackageList[]> {
    return this.http.post<IweddingPackageList[]>(APIConstant.weddingPackages.deleteWeddingPackage + Id, {})
  }


  // booking
  getAllBookings(): Observable<IbookingList[]> {
    return this.http.get<IbookingList[]>(APIConstant.bookings.getBookings)
  }
  editBooking(id: number): Observable<IbookingList[]> {
    return this.http.post<IbookingList[]>(APIConstant.bookings.getBookingById + id, {})
  }
  saveBookings(bookingObj: any): Observable<ReturnClass> {
    return this.http.post<ReturnClass>(APIConstant.bookings.createBookings, bookingObj)
  }
  updateBookings(bookingObj: any): Observable<IbookingList[]> {
    return this.http.post<IbookingList[]>(APIConstant.bookings.createBookings, bookingObj)
  }
  deleteBooking(id: number): Observable<IbookingList[]> {
    return this.http.post<IbookingList[]>(APIConstant.bookings.deleteBookings, id)
  }

  //order
  getOrders(id: number): Observable<any> {
    return this.http.get<any>(APIConstant.order.getOrder + id,)
  }
  addOrder(orderObj: any): Observable<any> {
    return this.http.post<any>(APIConstant.order.createOrder, orderObj)
  }
  updateOrders(orderObj: any): Observable<any> {
    return this.http.post<any>(APIConstant.order.updateOrder, orderObj)
  }
  deleteOrders(orderObj: any): Observable<any> {
    return this.http.post<any>(APIConstant.order.deleteOrder, orderObj)
  }





}
