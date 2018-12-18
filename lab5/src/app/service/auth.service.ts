import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from 'src/app/model/user';

const url = 'https://ece9065-cjia23-backend-fengchuiyu.c9users.io/api';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  constructor(private _http: HttpClient) {}
  
  submitRegister(body:any){
    let new_url = url + '/register';
    return this._http.post(new_url, body,{
      observe:'body'
    });
  }
  
  login(body: any){
    let new_url = url + '/login';
    return this._http.post(new_url, body,{observe:'body'})}
  
  logout(body:any){
    localStorage.removeItem('currentUser');
  }
  
  setUserstatus() {
    let new_url = url + '/username';
    return this._http.get(new_url, {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  
  
}
