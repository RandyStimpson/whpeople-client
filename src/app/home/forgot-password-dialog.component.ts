import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.css']
})
export class ForgotPasswordDialogComponent implements OnInit {

  message: string;
  errorMessage: string;
  @Output() backToSignIn: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onBackToSignInClick() {
    this.backToSignIn.emit();
  }

  onPasswordResetClick() {
    //TODO: Reset Password
   }

}
