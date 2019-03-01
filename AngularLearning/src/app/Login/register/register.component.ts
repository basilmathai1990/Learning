import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
  public maximumIdCount: number = 3;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailValidators()]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      idProofs: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      idType: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  get idProofsItem() {
    return this.registerForm.get('idProofs') as FormArray;
  }

  addIdProofs() {
    this.idProofsItem.push(this.createItem());
  }

  removeIdProofs(index: number) {
    this.idProofsItem.removeAt(index);
  }

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
