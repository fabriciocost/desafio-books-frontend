import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginPlaceholderComponent } from './login-placeholder/login-placeholder.component';

export const BeforeLoginRoutes: Routes = [
  {
    path: '',
    component: LoginPlaceholderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
