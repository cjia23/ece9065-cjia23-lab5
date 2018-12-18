import { Injectable } from '@angular/core';
import { UserDashboardComponent } from 'src/app/auth/user-dashboard/user-dashboard.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  
  
  constructor() { }
  
  public isAdmin: Boolean = false;
  public isUser: Boolean = false;
  
  //share data between userdashboard and authguard
  getUserstatus(){
    
  }
  
}
