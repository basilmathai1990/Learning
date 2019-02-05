import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomerLayoutComponent } from '../customer-layout/customer-layout.component';

export const CustomerRoutes: Routes = [
  {
    path: 'customer', component: CustomerLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];



