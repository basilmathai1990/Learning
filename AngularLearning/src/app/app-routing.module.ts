import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from 'ngx-icons';

//************ Layout section **********/
import { Layoutcomponents } from './Shared/common/layoutcomponents';


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
    path: '**',
    loadChildren: './Error/error.module#ErrorModule'
  }
];

@NgModule({
  declarations: [
    Layoutcomponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
