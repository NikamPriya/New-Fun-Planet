import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  loadAllUsers(){
    return this.http.get(APIConstant.Users.get)
   }

   saveAllUsers(Obj:any){
    return this.http.post(APIConstant.Users.Create,Obj);
   }

   updateAllUsers(Obj:any){
    return this.http.post(APIConstant.Users.Create,Obj);
   }

   trashAllUsers(Obj:any){
    return this.http.post(APIConstant.Users.Delete,Obj)
   }
}
