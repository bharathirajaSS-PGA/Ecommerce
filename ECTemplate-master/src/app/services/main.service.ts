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

  approveMerchant(merchant): Observable<any> {
    return this.http.post<any>(this.baseUrl+"merchant-approve/",merchant,{headers:this.headers})
  }

  rejectMerchantDetails(merchant): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "merchant-rejected/" + merchant.user_id + "/",{headers:this.headers})
  }

  getAllCategory():Observable<any> {
    return this.http.get<any>(this.baseUrl+"category/",{headers:this.headers})
  }

  addCategory(category): Observable<any> {
    return this.http.post<any>(this.baseUrl+"category/",category,{headers:this.headers})
  }

  editOneCategory(category): Observable<any> {
    return this.http.put<any>(this.baseUrl+"category/"+category.id+"/",category,{headers:this.headers})
  }
}
