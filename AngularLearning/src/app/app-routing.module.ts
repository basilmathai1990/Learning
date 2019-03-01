import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from 'ngx-icons';

//************ Layout section **********/
import { Layoutcomponents } from './Shared/common/layoutcomponents';
import { CalenderComponent } from './Shared/components/calender/calender.component';
import { SanitizehtmlPipe } from './Shared/pipes/sanitizehtml.pipe';



const routes: Routes = [
  {
    path: '',
    loadChildren: './Login/user.module#UserModule'
  },
  {
    path: 'customer',
    loadChildren: './Customer/customer.module#CustomerModule'
  },
  {
    path: 'calender',
    component: CalenderComponent
  },
  {
    path: '**',
    loadChildren: './Error/error.module#ErrorModule'
  }
];

@NgModule({
  declarations: [
    Layoutcomponents,
    CalenderComponent,
    SanitizehtmlPipe,
    //DynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
 // entryComponents: [DynamicComponent]
})
export class AppRoutingModule { }
