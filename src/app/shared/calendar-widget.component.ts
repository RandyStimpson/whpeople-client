import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.css']
})
export class CalendarWidgetComponent implements OnInit {

  @Output() dateChanged : EventEmitter<Date> = new EventEmitter<Date>();
  oneDayMs = 24*60*60*1000;
  dateString : string = "Today";
  today: Date = new Date();
  todayMs : number;
  yesterday : Date = new Date();
  widgetDate : Date = new Date();

  constructor() { }

  ngOnInit() {
    this.computeToday();
    this.widgetDate.setTime(this.todayMs); 
  }

  computeToday() {
    var date = new Date();
    this.todayMs = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    this.today.setTime(this.todayMs);
    this.yesterday.setTime(this.todayMs-24*60*60*1000);   
  }

  showCalendar()
  {
     //TODO: Show Calendar
  }

  nextDate()
  {
    this.computeToday(); //In case we cross midnight while app is open
    if (this.widgetDate.getTime() < this.today.getTime()) {
      this.widgetDate.setTime(this.widgetDate.getTime() + this.oneDayMs);
      this.dateString = this.formatDate(this.widgetDate);
      this.dateChanged.emit(this.widgetDate);
    }
    else {
      //TODO: Display message
    }
  }

  prevDate()
  {
    this.computeToday(); //In case we cross midnight while app is open
    this.widgetDate.setTime(this.widgetDate.getTime() - this.oneDayMs);
    this.dateString = this.formatDate(this.widgetDate);
    this.dateChanged.emit(this.widgetDate);
  }

  formatDate(date: Date) : string {
    var months = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
    if (date.getTime() == this.today.getTime()) return "Today";
    if (date.getTime() == this.yesterday.getTime()) return "Yesterday";
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  }
}
