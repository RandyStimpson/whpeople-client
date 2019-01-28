import { Component, OnInit } from '@angular/core';
import { ICalorieBarModel } from '../models/calorie-bar-model';

@Component({
  selector: 'app-food-log',
  templateUrl: './food-log.component.html',
  styleUrls: ['./food-log.component.css']
})
export class FoodLogComponent implements OnInit {

  constructor() { }

  expandedState: boolean = true;

  ngOnInit() {
  }


  // Temporary code to show calorie-bar
  calorieBarSettings: ICalorieBarModel =
  {
    totalCalories: 100,
    percentSatFat: 10,
    percentUnsatFat: 20,
    percentProtein: 40,
    percentNonSugarCarb: 20,
    percentSugar: 10
  }

  updateCount=0;

  expandCollapseClick()
  {
    this.expandedState = !this.expandedState;
    console.log("expand collapse "+ this.expandedState);
  }

  onDateChanged(date)
  {
    console.log("Date Changed: " + date);
  }

}
