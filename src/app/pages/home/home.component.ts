import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

<<<<<<< HEAD
=======

  isLoading:boolean = true;

  constructor(){
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
>>>>>>> 55e94d130058e28b3e71631a25a73ce07b5fe4fc
}
