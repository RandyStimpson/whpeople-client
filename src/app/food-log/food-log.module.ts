import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodLogComponent } from './food-log.component';
import { CalorieBarComponent } from './calorie-bar.component';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    FoodLogComponent,
    CalorieBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FoodLogComponent,
  ]
})
export class FoodLogModule { }
