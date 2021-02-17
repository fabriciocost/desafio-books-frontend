import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutes } from './before-login-routing.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPlaceholderComponent } from './login-placeholder/login-placeholder.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginPlaceholderComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(BeforeLoginRoutes),
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class BeforeLoginModule {}
