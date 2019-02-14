import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutes } from './customer-helper/customer-routes';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from 'ngx-icons';
import { CustomerComponents } from './customer-helper/customer-components';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    CustomerComponents
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  exports: [RouterModule]
})
export class CustomerModule { }
