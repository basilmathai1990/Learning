import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Shared/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  public addrKeys: string[];
  public addr: object;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required,],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailValidators()]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  setAddress(addrObj) {
    this.addr = addrObj;
    this.addrKeys = Object.keys(addrObj);
  }

  register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      //this.router.navigate(['/customer']);
      return;
    }
  }

}
