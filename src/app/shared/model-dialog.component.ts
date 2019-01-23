import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css'],
  animations: [
    trigger('dialogState', [
      state('open', style({
        transform: 'scale(1) rotateY(0deg)'
      })),
      state('closed', style({ transform: 'scale(0) rotateY(0deg)' })),
      state('closed90', style({ transform: 'rotateY(-90deg)' })),
      transition('closed <=> open', animate('400ms ease-in')),
      transition('open <=> closed90', animate('400ms ease-in')),
    ]),
    trigger('exteriorState', [
      state('open', style({
        opacity: .6
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('closed <=> open', animate('400ms ease-in')),
    ])
  ]
})
export class ModelDialogComponent implements OnInit {

  showDialog: boolean = true;
  dialogState: string = "open"; //open, closed, spinclosed spinopen
  exteriorState: string = "open"; //open, closed
  constructor() { }

  ngOnInit() {
  }

  onCloseIconClick() {
    this.exteriorState = "closed";
    this.dialogState = "closed";
    console.log("Close dialog icon");
  }

  onExteriorAnimationComplete() {
    console.log("animation complete: " + this.exteriorState);
    if (this.exteriorState == "closed")
      this.showDialog = false;
  }

  @Output() animationComplete: EventEmitter<any> = new EventEmitter<any>();
  onAnimationComplete() {
    console.log("animationComplete()");
    this.animationComplete.emit();
  }

  rotateDialog() {
    this.dialogState = this.dialogState == "open" ? "closed90" : "open";
  }

}
