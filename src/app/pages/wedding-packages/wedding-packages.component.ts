import { Component,OnInit } from '@angular/core';
import { weddingPackages } from 'src/app/core/models/classes/wedding-packages';
import { IweddingPackageList } from 'src/app/core/models/interface/Iwedding-packages';
import { MasterServiceService } from 'src/app/core/services/master-service.service';

@Component({
  selector: 'app-wedding-packages',
  templateUrl: './wedding-packages.component.html',
  styleUrls: ['./wedding-packages.component.css']
})
export class WeddingPackagesComponent implements OnInit{
  weddingPackagesList: IweddingPackageList[] = [];
  weddingPackageObj: weddingPackages = new weddingPackages;

  displayStyle: string = "none";

  isLoading: boolean = true; // Set this to false when loading is complete


  constructor(private wedPackageSer: MasterServiceService) {
    setTimeout(() => {
    this.isLoading = false;
  }, 2000); }

  ngOnInit(): void {
    this.loadweddingPackages();
  }

  loadweddingPackages() {
    debugger;
    this.wedPackageSer.getAllweddingPackages().subscribe((res: any) => {
      this.weddingPackagesList = res;
      console.log(this.weddingPackagesList)
    })
  }

  onEdit(item: any) {
    debugger
    this.weddingPackageObj = item;
  }

  saveWeddingPackage() {
    debugger;
    this.wedPackageSer.createUpdateWeddingPackage(this.weddingPackageObj).subscribe((response: any) => {
      if (response.result) {
        alert("Created new Wedding Package")
        this.loadweddingPackages();
      } else {
        alert(response.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      });
  }

  onUpdate() {
    this.wedPackageSer.updateProduct(this.weddingPackageObj).subscribe((res: any) => {
      if (res.result) {
        alert("Package updated successfully");
        this.loadweddingPackages()
      } else {
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  onDelete(WeddingPackageId: number) {
    debugger
    const isConfirm = confirm(" Are you want to delete this package");
    if (isConfirm) {
      this.wedPackageSer.onDelete(WeddingPackageId).subscribe((result: any) => {
        if (result.result) {
          alert("Package deleted successfully");
          this.loadweddingPackages();
        } else {
          alert(result.message);
        }
      },
        error => {
          alert(JSON.stringify(error.error))
        })
    }
  }


  openPopup() {
    this.displayStyle = "block"
  }
  closePopup() {
    this.displayStyle = "none"
    this.weddingPackageObj = new weddingPackages
  }



}
