import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
 
  constructor(private _myservice: AuthService, 
              private _router: Router, 
              private _activatedRoute: ActivatedRoute) 
  {
      this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
      })
  }

  ngOnInit() {
  }
  
  //check the user input is valid, the email and password
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }
  
  //login and get the token 
  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/dash']);
          },
          error => { console.log('log in failed.') }
        );}
  }
  
  //function to redirect to resigter panel
  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}

