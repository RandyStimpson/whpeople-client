import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppControllerService {

  constructor(private _router: Router) { 
    
  }

  private signedInBs = new BehaviorSubject<boolean>(false);
  signedIn$ = this.signedInBs.asObservable();

  private currentRouteBs = new BehaviorSubject<string>("login");
  currentRoute$ = this.currentRouteBs.asObservable();

  SignIn()
  {
    this.signedInBs.next(true);
  }

  SignOut()
  {
    this.signedInBs.next(false);
  }

  NavigateTo(route: string)
  {
    this.currentRouteBs.next(route);

    route = route.replace(" ", "").toLocaleLowerCase();
    this._router.navigate(['/' + route])
  }
}
