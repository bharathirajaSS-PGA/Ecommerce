import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MenuInfo } from '../interface/ec-template.interface';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Role, User } from '../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: MenuInfo[] = [];
  currentUser:User;

  constructor(public dataService: DataService,
    private router: Router,
    public authSer:AuthService) {
      this.authSer.currentUser.subscribe(x => this.currentUser = x);
    }
  ngOnInit() {
    this.getMenuList();
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === "ADMIN";
  }

  get isMerchant() {
    return this.currentUser && this.currentUser.role === "MERCHANT";

  }

  get isCustomer() {
    return this.currentUser && this.currentUser.role === "CUSTOMER";
  }

  getMenuList() {
    this.dataService.getMenuList().subscribe((data: MenuInfo[]) => {
      this.menuList = data;
    });
  }

  logout() {
    this.currentUser = null
    localStorage.clear();
    this.router.navigate([''])

  }
}
