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
      },err => {
        console.log(err)
      }
    )
  }

}
