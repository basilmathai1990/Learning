import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    CustomValidators() { }

    static ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
            return { 'ageRange': true };
        }
        return null;
    }

    ageRangeValidator(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'ageRange': true };
            }
            return null;
        };
    }

    static emailValidators(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
           let  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (control.value !== undefined && !emailPattern.test(control.value)) {
                return { 'emailVal': true };
            }
            return null;
        }
    }

}

