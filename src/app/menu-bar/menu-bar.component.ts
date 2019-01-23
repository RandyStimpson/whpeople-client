import { Component, OnInit } from '@angular/core';
import { AppControllerService } from '../app-controller.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  menuNames: string[] = ['Profile', 'Journal', 'Biometrics', 'Score', 'Food Log'];
  selectedMenu: string;
  
  constructor(private _appControllerService: AppControllerService) {
    _appControllerService.currentRoute$.subscribe(value => this.selectedMenu = value);
  }

  ngOnInit() {
  }
}
