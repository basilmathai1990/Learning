import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppstatemanagerService } from 'src/app/Services/appstate/appstatemanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private appState: AppstatemanagerService) {
   // this.appState.setState("bodyClass", "loginBgImage");
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required,],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
  }


  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    this.appState.setState('loginDetails', this.loginForm.getRawValue());

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      //this.router.navigate(['/customer']);
      return;
    }
    else {
      this.router.navigate(['/customer']);
      // if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
      //   console.log("Login successful");
      //   //this.authService.authLogin(this.model);
      //   localStorage.setItem('isLoggedIn', "true");
      //   localStorage.setItem('token', this.f.userid.value);
      //   this.router.navigate([this.returnUrl]);
      // }
      // else{
      //   this.message = "Please check your userid and password";
      // }
    }
  }

  ngOnDestroy() {
    this.appState.setState('login-lastSeen', this.appState.getCurrentDateTime());
  }
}
