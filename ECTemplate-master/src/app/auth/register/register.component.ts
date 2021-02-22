import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authSer: AuthService,
    private mainSer: MainService) { }

  ngOnInit() {
  }

  user: any = {}
  merchant: any = {}

  newUserRegister() {
    console.log()
    console.log(this.user)
    this.authSer.register(this.user).subscribe(
      res=> {
        console.log(res)
      },err => {
        console.log(err)
      }
    )
  }

  newMerchantRegister() {
    console.log(this.merchant)
    this.mainSer.merchant(this.merchant).subscribe(
      (res) => {
        console.log(res)
      },err => {
        console.log(err)
      }
    )
  }

}
