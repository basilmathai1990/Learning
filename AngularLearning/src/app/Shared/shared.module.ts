import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from 'ngx-icons';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { GooglePlacesDirective } from './directives/google/google-places.directive';
import { VarDirective } from './directives/var/var.directive';
import { EmailCustomValidatorDirective } from './validators/directives/email-custom-validator.directive';
import { EqualValidator } from './validators/directives/equal-validator.directive';


@NgModule({
  declarations: [
    DialogueComponent,
    GooglePlacesDirective,
    VarDirective,
    EmailCustomValidatorDirective,
    EqualValidator
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
  ],
  exports:[
    DialogueComponent,
    GooglePlacesDirective,
    VarDirective,
    EmailCustomValidatorDirective,
    EqualValidator
  ]
})
export class SharedModule { }
