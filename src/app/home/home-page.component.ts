import { Component, OnInit, ViewChild} from '@angular/core';
import { ModelDialogComponent} from '../shared/model-dialog.component';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild(ModelDialogComponent) private model : ModelDialogComponent;
  openDialog: string = "signin";
  nextDialog: string;
  constructor() { }

  ngOnInit() {
  }

  signIn(credentials: any) {
    console.log(credentials);
  }

  backToSignIn(){
    this.model.rotateDialog();
    this.nextDialog = "signin";
  }

  forgotPassword() {
    this.model.rotateDialog();
    this.nextDialog = "forgotpassword";
  }

  signUp() {
    this.nextDialog = "signup";
    this.model.rotateDialog();
  }

  showNextDialog()
  {
    console.log("ShowNextDialog()")
    if (this.nextDialog !== undefined) {
      this.openDialog = this.nextDialog;
      this.nextDialog = undefined;
      this.model.rotateDialog();  
    }
  }
}