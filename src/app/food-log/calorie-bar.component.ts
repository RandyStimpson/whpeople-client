import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICalorieBarModel } from '../models/calorie-bar-model';

@Component({
  selector: 'calorie-bar',
  templateUrl: './calorie-bar.component.html',
  styleUrls: ['./calorie-bar.component.css']
})
export class CalorieBarComponent implements OnInit, OnChanges{

  MIN_HEIGHT = 10;
  MAX_HEIGHT = 30;
  MAX_WIDTH = 200;
  height: number;
  width: number;

  @Input() model: ICalorieBarModel;
  @Input() changeCount = 0;

  constructor() { }

  ngOnInit() {
    this.calculateHeightWidth();
  }

  ngOnChanges(changes: SimpleChanges)
  {
    this.calculateHeightWidth();
    console.log(changes);
  }


  calculateHeightWidth(): void {
    var totalCalories = this.model.totalCalories;
    if (totalCalories <= 300) {
      this.height = 10;
      this.width = this.MAX_WIDTH * totalCalories / 300;
    }
    else if (totalCalories <= 900)
    {
      this.width = this.MAX_WIDTH;
      this.height = this.MAX_HEIGHT * totalCalories/900;
    }
    else
    {
      this.width = this.MAX_WIDTH;
      this.height = this.MAX_HEIGHT;
    }
  }

}
