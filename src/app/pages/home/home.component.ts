import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  isLoading:boolean = true;

  constructor(){
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
