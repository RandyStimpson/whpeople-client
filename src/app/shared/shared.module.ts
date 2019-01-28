import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDialogComponent } from './modal-dialog.component';
import { DialogButtonFooterComponent } from './dialog-button-footer.component';
import { CalendarWidgetComponent } from './calendar-widget.component';

@NgModule({
  declarations: [
    ModalDialogComponent,
    DialogButtonFooterComponent,
    CalendarWidgetComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalDialogComponent,
    DialogButtonFooterComponent,
    CalendarWidgetComponent,
  ]
})
export class SharedModule { }
