import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-button-footer',
  template: `<div><ng-content></ng-content></div><div class="clear"></div>`,
  styles: [' .clear {clear:both;}']
})
export class DialogButtonFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
