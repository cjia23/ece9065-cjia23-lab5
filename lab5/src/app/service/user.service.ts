import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  
  const url: string = "https://ece9065-cjia23-backend-fengchuiyu.c9users.io/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    
    return this.http.get<User[]>(url)
    
  };
  
}
