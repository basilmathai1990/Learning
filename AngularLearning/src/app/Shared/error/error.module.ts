import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from 'ngx-icons';
import { Errorroutes } from './error-helper/error-routes';
import { RouterModule } from '@angular/router';
import { ErrorComponents } from './error-helper/error-components';

@NgModule({
  declarations: [ErrorComponents],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(Errorroutes)
  ]
})
export class ErrorModule { }
