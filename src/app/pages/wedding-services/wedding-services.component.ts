
import { Component,OnInit } from '@angular/core';
import { weddingServicesList } from 'src/app/core/models/classes/wedding-Services';
import { IweddingServicesList } from 'src/app/core/models/interface/Iwedding-servicves';
import { WeddingServicesService } from 'src/app/core/services/wedding-services.service';

@Component({
  selector: 'app-wedding-services',
  templateUrl: './wedding-services.component.html',
  styleUrls: ['./wedding-services.component.css']
})
export class WeddingServicesComponent implements OnInit {
  

  displayStyle: string = 'none';

  weddingServiceList: IweddingServicesList[] = [];
  weddingServicesObj: weddingServicesList = new weddingServicesList()
  
  isLoader:boolean = true;

  constructor(private weddingServ: WeddingServicesService) { 
    setTimeout(() => {
      this.isLoader = false;
    }, 4000);
  }

  ngOnInit(): void {
    this.loadAllWeddingServices();
  }

  loadAllWeddingServices() {
    this.weddingServ.getAllWeddingServices().subscribe((res: any) => {
      this.weddingServiceList = res
    })
  }

  saveWeddingServices() {
    this.weddingServ.AddWeddingServices(this.weddingServicesObj).subscribe((res: any) => {
      if (res.result) {
        alert("services created successfully")
        this.loadAllWeddingServices();
      } else {
        alert(res.message)
      }
    
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  onEdit(obj: any) {
    this.weddingServicesObj = obj;
  }

  UpdateProduct() {
    this.weddingServ.onUpdate(this.weddingServicesObj).subscribe((res: any) => {
      if (res.result) {
        alert("service Updated successfully")
        this.loadAllWeddingServices();
      } else {
        alert(res.message)
      }
  
    
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  onDelete(item: any) {
    this.weddingServ.onDeleteBtn(item).subscribe((res: any) => {
      if (res.result) {
        alert("Service Deleted successfully")
        this.loadAllWeddingServices()
      } else {
        alert(res.message)
      }
    },error => {
      alert(JSON.stringify(error.error))
    })
  }

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none'
    this.weddingServicesObj = new weddingServicesList;
    
  
  }

}


