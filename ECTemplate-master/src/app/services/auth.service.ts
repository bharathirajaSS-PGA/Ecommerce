import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  baseUrl = environment.baseUrl
  
 

  getUser():Observable<any> {
    return this.http.get<any>(this.baseUrl+"users")
  }

  createNewUser(data):Observable<any> {
    return this.http.post<any>(this.baseUrl+"users",data)
  }

  // loginUser(data):Observable<any> {
  //   return this.http.post<any>(this.baseUrl+"token/", data)
  // }

  
  loginUser(data) {
    return this.http.post<any>(this.baseUrl+"token/", data)
        .pipe(map(user => {
          console.log(user)
            // login successful if there's a jwt token in the response
            if (user && user.access && user.refresh) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem("LoggedIn",user.access)
                this.currentUserSubject.next(user);
            }

            return user;
        }));
}

  register(data): Observable<any> {
    return this.http.post<any>(this.baseUrl+"register/", data)
  }

    //Set User Secure Token
  setSecureToken(secure_token: string) {
    localStorage.setItem("LoggedIn", secure_token)
  }

  //Set User Secure Token
  getSecureToken() {
    return localStorage.getItem("LoggedIn")
  }

  //Check User is LoggedIn or not!
  isLoggednIn() {
    return this.getSecureToken() !== null;
  }

  //Logout method
  logout() {
    localStorage.removeItem("LoggedIn");
    this.currentUserSubject.next(null);
    this.router.navigate(["login"]);
  }

}
