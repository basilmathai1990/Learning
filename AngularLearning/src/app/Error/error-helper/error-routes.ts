import { Routes } from '@angular/router';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const Errorroutes: Routes = [
  {
    path: 'error',
    children: [
      { path: '', redirectTo: 'underconstruction', pathMatch: 'full' },
      { path: 'underconstruction', component: UnderConstructionComponent },
      { path: 'pagenotfound', component: PageNotFoundComponent },
      { path: '**', redirectTo: 'pagenotfound' },

    ]
  }, 
  {
    path: '**', component: PageNotFoundComponent
  }
];