import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private mainSer: MainService) { }
  merchantList = [];
  ngOnInit() {
    this.getAllMerchant();
  }

  getAllMerchant() {
    this.mainSer.getmerchantList().subscribe(
      res => {
        console.log(res)
        this.merchantList = res
      },
      err=> {
        console.log(err)
      }
    )
  }

  approveMerchant(merchant) {
    console.log(merchant)
    this.mainSer.approveMerchant({user_id:merchant.id}).subscribe(
      (res) => {
        console.log(res)
        alert("Appoved")
        this.getAllMerchant();

      },err => {
        console.log(err)
      }
    )
  }

  rejectMerchant(merchant) {
    this.mainSer.rejectMerchantDetails({user_id:merchant.id}).subscribe(
      (res) => {
        console.log(res["result"])
        alert(res["result"])
        this.getAllMerchant();
      },err => {
        console.log(err)
      }
    )
  }

}
