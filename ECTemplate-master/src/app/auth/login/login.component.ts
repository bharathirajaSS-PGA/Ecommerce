import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: any='';
 
  constructor(private authSer: AuthService,private router: Router, private route: ActivatedRoute,) { 
  //   if (this.authSer.currentUserValue) { 
  //     this.router.navigate(['/']);
  // }
  }

  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  user: any = {}

  userLogin(data: any) {
    console.log(data)
    this.authSer.loginUser(this.user).pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            console.log(error)
        });
  }
  

}
