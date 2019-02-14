import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Directive({
  selector: '[input,textarea,div]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: CustomValidators.emailValidators, 
      multi: true
    }
  ]
})
export class EmailCustomValidatorDirective {
}
