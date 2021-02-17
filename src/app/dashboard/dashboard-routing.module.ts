import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MainNavComponent } from './main-nav/main-nav.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full',
      },
      {
        path: 'books',
        component: BooksComponent,
      },
    ],
  },
];
