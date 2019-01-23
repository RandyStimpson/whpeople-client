import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDialogComponent } from './model-dialog.component';
import { DialogButtonFooterComponent } from './dialog-button-footer.component';
import { DialogButtonDirective } from './dialog-button.directive';

@NgModule({
  declarations: [
    ModelDialogComponent,
    DialogButtonFooterComponent,
    DialogButtonDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModelDialogComponent,
    DialogButtonFooterComponent,
    DialogButtonDirective,
  ]
})
export class SharedModule { }
