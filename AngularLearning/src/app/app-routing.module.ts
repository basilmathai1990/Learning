import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from 'ngx-icons';

//************ Layout section **********/
import { Layoutcomponents } from './Shared/common/layoutcomponents';

//*********** Custom components *****/
import { LoginComponent } from './Login/login/login.component';
import { PageNotFoundComponent } from './Shared/error/page-not-found/page-not-found.component';
import { RegisterComponent } from './Login/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    Layoutcomponents,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
