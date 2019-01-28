import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDialogComponent } from './model-dialog.component';
import { DialogButtonFooterComponent } from './dialog-button-footer.component';
import { DialogButtonDirective } from './dialog-button.directive';
import { CalendarWidgetComponent } from './calendar-widget.component';

@NgModule({
  declarations: [
    ModelDialogComponent,
    DialogButtonFooterComponent,
    CalendarWidgetComponent,
    DialogButtonDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModelDialogComponent,
    DialogButtonFooterComponent,
    CalendarWidgetComponent,
    DialogButtonDirective,
  ]
})
export class SharedModule { }
