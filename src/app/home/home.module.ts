import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { FormsModule} from '@angular/forms';


import { HomePageComponent } from './home-page.component';
import { SigninDialogComponent } from './signin-dialog.component';
import { SignupDialogComponent } from './signup-dialog.component';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog.component';


@NgModule({
  declarations: [
    HomePageComponent, 
    SigninDialogComponent, SignupDialogComponent, ForgotPasswordDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomeModule { }
