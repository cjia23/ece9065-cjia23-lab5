import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedataService } from 'src/app/service/sharedata.service';

import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  public username = '';
  

  constructor(private myService:AuthService, private _router: Router, private dataService: SharedataService) {
    this.myService.setUserstatus()
          .subscribe(
          data => {this.username = data.toString();
                   this.dataService.isAdmin = (this.username == 'ChunyangJia');
                   this.dataService.isUser = true;
                   console.log('user status: ' + this.dataService.isUser);
                   console.log('admin status: ' + this.dataService.isAdmin);
                   
          },
          error => this._router.navigate(['/main/login']))
  }
  

  ngOnInit() {
  }
  
  
  logout(){
    localStorage.removeItem('token');
    this.username = '';
    this.dataService.isAdmin = false;
    this.dataService.isUser = false;
    this._router.navigate(['/main/login']);
  }
  

  
}
