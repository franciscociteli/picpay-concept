import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_URL } from "./constants";
import { Observable } from 'rxjs';



@Injectable()
export class ApiService {
  public token: string = "";
  public headers: HttpHeaders = new HttpHeaders();
  public currentUser: any;
  public currentSchema: any;

  constructor(private http: HttpClient) {
      
  }

  getWithParams(url: string, params: HttpParams): Observable<any> {
    
    return this.http.get(`${API_URL}/${url}`, {headers: this.headers, params: params });
  }

  get(url: string): Observable<any> {
    return this.http.get(`${API_URL}/${url}`, {headers: this.headers});
  }

  post(url: string, data: {}): Observable<any> {
    
    return this.http.post(`${API_URL}/${url}`, data, {headers: this.headers});
  } 

  delete(url: string): Observable<any>{
    
    return this.http.delete(`${API_URL}/${url}`, {headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}});
  }

  put(url: string, data: {}): Observable<any> {
    
    return this.http.put(`${API_URL}/${url}`, JSON.stringify(data), {headers: this.headers});
  }

  patch(url: string, data: Array<any>): Observable<any> {
    
    return this.http.patch(`${API_URL}/${url}`, JSON.stringify(data), {headers: this.headers});
  }

  rebuildParams() {
    let currentUserStr =  localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(currentUserStr != null ? currentUserStr : "");
    this.token = this.currentUser && this.currentUser.token;
    this.currentSchema = localStorage.getItem('currentSchema');
    this.headers = new HttpHeaders({'Content-Type': 'application/json', 
                                    'Authorization': `Bearer ${this.token}`, 
                                    'Access-Control-Allow-Origin': '*', 
                                    'x-access-token': 'wnK3151CUa'});
  }
}
