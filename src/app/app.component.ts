import { Component } from '@angular/core';
import { AppControllerService } from './app-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn = false; //Determines whether the "Sign In" or "Sign Out" button is displayed.

  constructor(private _appControllerService: AppControllerService) {
    _appControllerService.signedIn$.subscribe(
      value => this.isSignedIn = value
    )
  }

  onSignOutClick() {
    this._appControllerService.SignOut();
    this._appControllerService.NavigateTo("home");
  }

  onSignInClick() {
    this._appControllerService.NavigateTo("home");
  }

}
