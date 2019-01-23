import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignupDialogComponent implements OnInit {

  message: string;
  errorMessage: string;
  @Output() backToSignIn: EventEmitter<any> = new EventEmitter<any>();
 

  constructor() { }

  ngOnInit() {
  }

  onBackToSignInClick() {
    this.backToSignIn.emit();
  }


}
