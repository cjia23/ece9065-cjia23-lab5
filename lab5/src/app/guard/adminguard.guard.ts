import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedataService } from 'src/app/service/sharedata.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  
  constructor(private dataService: SharedataService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.dataService.isAdmin) {
      return true;
    }
    else {
      return false;
    }
  }
  
  
}
