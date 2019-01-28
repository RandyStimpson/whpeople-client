import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalDialogComponent} from '../shared/modal-dialog.component';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild(ModalDialogComponent) private modal : ModalDialogComponent;
  openDialog: string = "signin";
  nextDialog: string;
  constructor() { }

  ngOnInit() {
  }

  signIn(credentials: any) {
    console.log(credentials);
  }

  backToSignIn(){
    this.modal.rotateDialog();
    this.nextDialog = "signin";
  }

  forgotPassword() {
    this.modal.rotateDialog();
    this.nextDialog = "forgotpassword";
  }

  signUp() {
    this.nextDialog = "signup";
    this.modal.rotateDialog();
  }

  showNextDialog()
  {
    console.log("ShowNextDialog()")
    if (this.nextDialog !== undefined) {
      this.openDialog = this.nextDialog;
      this.nextDialog = undefined;
      this.modal.rotateDialog();  
    }
  }
}