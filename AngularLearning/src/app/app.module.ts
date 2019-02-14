// *********** Common module ************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from 'ngx-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'


//************ Common Router section **********/

import { AppRoutingModule } from './app-routing.module';

//************ Custom module section **********/

import { CustomerModule } from './Customer/customer.module';
import { ErrorModule } from './Error/error.module';
import { AppstatemanagerService } from './Services/appstate/appstatemanager.service';
import { UserModule } from './Login/user.module';
import { SharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule,
    UserModule,
    ErrorModule,


  ],
  providers: [HttpClientModule, AppstatemanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
