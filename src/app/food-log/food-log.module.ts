import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodLogComponent } from './food-log.component';
import { CalorieBarComponent } from './calorie-bar.component';


@NgModule({
  declarations: [
    FoodLogComponent,
    CalorieBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FoodLogComponent,
  ]
})
export class FoodLogModule { }
