import { Injectable, Input} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SharedataService } from 'src/app/service/sharedata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  
  //Guard for Authenticated User
  constructor(private dataService: SharedataService){
    
  }
  
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.dataService.isUser) {
      return true;
    }
    else {
      return false;
    }
  }
  
  
  
}
