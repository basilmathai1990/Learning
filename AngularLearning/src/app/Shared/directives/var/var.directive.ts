import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[var]',
  exportAs: 'var'
})
export class VarDirective {
  @Input() var: any;
  constructor() { }

}

// *************************?? Usage inside html ??***************************

// <div #aVariable="var" var="abc"></div>

// or

// <div #aVariable="var" [var]="'abc'"></div>
// and use the variable like

// <div>{{aVariable.var}}</div>


// 1. #aVariable creates a reference to the VarDirective (exportAs: 'var')
// 2. var="abc" instantiates the VarDirective and passes the string value "abc" to it's value input.
// 3 .aVariable.var reads the value assigned to the var directives var input.