import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private myservice: AuthService) { }
  
  users;
  
  ngOnInit() {}
  title = 'User list for admin to update';
  
 
  
}
