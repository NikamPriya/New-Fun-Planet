import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.serv/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj:any={
    UserName: "",
    Password: "",
  }

    constructor(private loginserv: LoginService , private router : Router) {

    }
    ngOnInit(): void {

    }
    onLogin(){

       this.loginserv.onLogin(this.loginObj).subscribe((res:any)=>{
        if(res.result){
          alert('login Success')
          this.router.navigateByUrl('home')
          localStorage.setItem('adminLoginDetails', JSON.stringify(res))
        }else{
          alert(res.message);
        }
       })
    }

}
