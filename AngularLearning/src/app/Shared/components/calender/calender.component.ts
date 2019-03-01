import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  ReflectiveInjector,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {

  @Input() month = new Date().getMonth();
  @Input() value = "";
  @Input() controlName: string = "datapicker";
  @Input() class: string = "";
  @Input() dateformat: string = "dd/mm/yyyy";
  @Output() click = new EventEmitter();

  public year = new Date().getFullYear();
  public firstDay = new Date(this.year, this.month, 1);
  public lastDay = new Date(this.year, this.month + 1, 0);
  public offset = this.firstDay.getDay();
  public NoDaysIntheMonth = new Date(this.year, this.month + 1, 0).getDate();
  public calenderVisible: boolean = false;
  public daysWithOfset = 0;
  public daysFilterArray = [];
  public monthTitle: string;

  // public dayCount = 1;
  // public theHtmlString: any;
  // outlet = DynamicComponent;
  // dynamicComponentInjector: Injector;

  // set dynamicComponentInputTitle(html) {
  //   this.dynamicComponentInjector = ReflectiveInjector.resolveAndCreate([{ provide: HTML, useValue: html }], this.parentInjector);
  // }

  constructor(private parentInjector: Injector) { }

  ngOnInit() {

  }

  makeVisible() {
    this.calenderVisible = true;
    this.getDays(this.month);
  }

  getVal(day) {
    switch (this.dateformat) {
      case 'dd/mm/yyyy':
        this.value = this.formatSingleDigit(day) + "/" + this.formatSingleDigit(this.month) + "/" + this.year
        break;
      default:
        this.value = this.year + "/" + (this.month + 1) + "/" + day;
        break;
    }
  }

  formatSingleDigit(month: number) {
    return month < 10 ? "0" + month : month;
  }

  getDays(month) {
    let mos = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'Decemeber']
    this.monthTitle = mos[month];
    this.month = month;
    this.firstDay = new Date(this.year, month, 1);
    this.lastDay = new Date(this.year, month + 1, 0);
    this.offset = this.firstDay.getDay();
    this.NoDaysIntheMonth = new Date(this.year, this.month + 1, 0).getDate()
    let daysArray = [];
    this.daysFilterArray = [];

    if (this.offset != 0) {
      for (var i = (-this.offset); i <= this.NoDaysIntheMonth; i++) {
        if (i != 0) {
          daysArray.push(i);
        }
      }
    } else {
      daysArray = Array.from({ length: this.NoDaysIntheMonth }, (v, k) => k)
    }


    while (daysArray.length != 0) {
      this.daysFilterArray.push(daysArray.splice(0, 7));
    }

    // let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // this.dayCount = 1;
    // this.firstDay = new Date(this.year, month, 1);
    // this.lastDay = new Date(this.year, month + 1, 0);
    // this.offset = this.firstDay.getDay();
    // this.dayCount = 1;
    // this.theHtmlString = "";
    // this.theHtmlString += "<tr>"
    // for (let i = 0; i < 7; i++) {
    //   this.theHtmlString += "<td id='dt-head'>" + day[i] + "</td>"
    // }
    // this.theHtmlString += "</tr>"
    // let firstDay = new Date(this.year, month, 1);
    // let lastDay = new Date(this.year, month + 1, 0);
    // let offset = firstDay.getDay();
    // let dayCount = 1;

    // for (let i = 0; i < 5; i++) {
    //   this.theHtmlString += "<tr id=row-" + i + ">"

    //   for (let rw = 0; rw < 7; rw++) {
    //     if (offset == 0) {

    //       this.theHtmlString += " <td  id='" + "cell-" + dayCount + "'>"
    //         + "<input type='button' id ='day_val" + dayCount + "'" + " (click)='getVal(" + dayCount + ")' value= '" + dayCount + "' >" +
    //         "</td>";
    //       if (dayCount >= lastDay.getDate()) {
    //         break;
    //       }
    //       dayCount++;
    //     } else {
    //       this.theHtmlString += "<td> </td>";
    //       offset--;
    //     }
    //   }
    //   this.theHtmlString += "</tr>";
    //   // this.dynamicComponentInputTitle = this.theHtmlString;

    //}
  }



  findNextMonth() {
    debugger;
    if (this.month < 12) {
      this.month = this.month + 1;
      this.getDays(this.month);
    } else {
      this.month = 0
      this.year++;
    }
  }

  findPrevMonth() {
    debugger;
    if (this.month > 0) {
      this.month = this.month - 1;

    } else {
      this.month = 11;
      this.year--;
    }

    this.getDays(this.month);

  }


  findPrevYear() {
    this.year = this.year - 1;
    this.getDays(this.month);
  }
  findNextYear() {
    this.year = this.year + 1;
    this.getDays(this.month);
  }



}

// export const HTML = new InjectionToken<string>('html', { providedIn: 'root',  factory: () => 'html' } ); 

// @Component({
//   selector: 'dynamic',
//   template: '<table [innerHtml]="html | sanitizeHtml"></table>',
// })
// export class DynamicComponent {
//   @Input() html;
//   constructor(@Inject(HTML) private htmlInjected: string){

//   } 

//   ngOnInit() {
//     this.html = this.html || this.htmlInjected;
//   }

//   getVal(day) {
//    console.log(day);
//   }
// }

