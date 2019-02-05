import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutes } from './customer-helper/customer-routes';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from 'ngx-icons';
import { CustomerComponents } from './customer-helper/customer-components';
import { DialogueComponent } from '../Shared/dialogue/dialogue.component';

@NgModule({
  declarations: [
    CustomerComponents,
    DialogueComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  exports: [RouterModule]
})
export class CustomerModule { }
