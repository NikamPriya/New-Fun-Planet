import { Component ,OnInit} from '@angular/core';
import { users } from 'src/app/core/models/classes/Users';
import { Iusers } from 'src/app/core/models/interface/Iusers';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
[x: string]: any;
  isModalPopUp: String = "none";
  displayStyle='none';
  usersList: Iusers[] = [];
  usersObj: users= new users;
  isLoading: boolean = true;

  constructor(private userSrv: UsersService) {setTimeout(() => {
    this.isLoading = false;
  }, 2000); }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userSrv.loadAllUsers().subscribe((res: any) => {
      this.usersList = res;
    })
  }

  creatAllUsers() {
    this.userSrv.saveAllUsers(this.usersObj).subscribe((res: any) => {
      if (res.result) {
        alert("Users Added Successfully");
        this.getAllUsers();
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

  upAllUsers() {
    this.userSrv.updateAllUsers(this.usersObj).subscribe((res: any) => {
      if (res.result) {
        alert("Users updated Successfully");
        this.getAllUsers();
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
    this.usersObj = item;
  }

  deletAllUsers(item:any) {
    debugger;
    this.userSrv.trashAllUsers(item).subscribe((res: any) => {
      if (res.result) {
        alert("Deleted Successfully");
        this.getAllUsers();
      } else {
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    }
    )
  }

  openModel() {
    this.isModalPopUp = 'block'
  }

  closeModel() {
    this.isModalPopUp = 'none',
    this.usersObj= new users;
    }

}
