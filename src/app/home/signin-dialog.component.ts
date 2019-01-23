import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppControllerService } from '../app-controller.service';
import { SignupDialogComponent } from './signup-dialog.component';


@Component({
  selector: 'signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.css']
})
export class SigninDialogComponent implements OnInit {

  message: string;
  errorMessage: string;
  username: string;
  password: string;
  @Output() signUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() forgotPassword: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _appControllerService: AppControllerService) { }

  ngOnInit() {
  }

  onSignInClick() {
    //TODO: Maybe use a sign in service
    if (this.username === undefined || this.username.trim() == "")
    {
      this.errorMessage = "Please enter a username or email address"
      return;
    }
    if (this.credentialsAreValid()) {
      this._appControllerService.SignIn();
      this._appControllerService.NavigateTo('Food Log');
    }
  }

  credentialsAreValid() : boolean {
    //TODO: Authenticate
    return true;
  }

  onSignUpClick() {
    this.signUp.emit();
  }

  onForgotPasswordClick() {
    this.forgotPassword.emit();
  }

  onKeyPress() {
    this.errorMessage = undefined;
  }
}
