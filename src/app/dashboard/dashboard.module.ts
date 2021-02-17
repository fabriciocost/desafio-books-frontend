import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutes } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BooksComponent } from './books/books.component';
import { MaterialModule } from '../material.module';
import { BookDialogComponent } from './book-dialog/book-dialog.component';

@NgModule({
  declarations: [MainNavComponent, BooksComponent, BookDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
  ],
  // providers: [{ provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() }],
})
export class DashboardModule {}
