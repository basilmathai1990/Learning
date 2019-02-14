import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from 'ngx-icons';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { GooglePlacesDirective } from './directives/google/google-places.directive';
import { VarDirective } from './directives/var/var.directive';
import { EmailCustomValidatorDirective } from './validators/directives/email-custom-validator.directive';

@NgModule({
  declarations: [
    DialogueComponent,
    GooglePlacesDirective,
    VarDirective,
    EmailCustomValidatorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
  ],
  exports:[
    DialogueComponent,
    GooglePlacesDirective,
    VarDirective,
    EmailCustomValidatorDirective
  ]
})
export class SharedModule { }
