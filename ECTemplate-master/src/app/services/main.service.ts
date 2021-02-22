import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('LoggedIn')}`
  })

  merchant(data): Observable<any> {
    return this.http.post<any>(this.baseUrl+"merchant/",data)
  }

  getmerchantList():Observable<any> {
    return this.http.get<any>(this.baseUrl+"merchant-list/", {headers: this.headers })

  }

  approveMerchant(merchant) {
    return this.http.post(this.baseUrl+"merchant-approve/",merchant,{headers:this.headers})
  }
}
