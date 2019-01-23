import { Component, OnInit, Input} from '@angular/core';
import { AppControllerService } from '../app-controller.service';


@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit{

  @Input() active: boolean = false;
  @Input() menuname: string;

  constructor(private _appControllerService : AppControllerService) { }

  ngOnInit() {
  }

  onClick(): void {
    this.active = !this.active;
    this._appControllerService.NavigateTo(this.menuname);
  }

}
