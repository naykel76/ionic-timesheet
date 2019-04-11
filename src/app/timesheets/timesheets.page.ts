import { Component, OnInit } from '@angular/core';
import { Timesheet } from './timesheet.model';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.page.html',
  styleUrls: ['./timesheets.page.scss'],
})

export class TimesheetsPage implements OnInit {

  // add 'timesheets' property which is of type 'Timesheet'
  timesheets: Timesheet[] = [
    {
      id: '1', weekEnding: 'April 21, 2019', totalHours: ' 19h 00m', isPaid: false,
      hoursWorked: [
        { 'day': 'Wed', 'date': 'April 10,  2019', 'startTime': '10:00', 'finishTime': '15:00', 'break': 0, 'hours': 5 },
        { 'day': 'Tue', 'date': 'April 9,  2019', 'startTime': '8:30', 'finishTime': '17:00', 'break': 30, 'hours': 8 },
        { 'day': 'Mon', 'date': 'April 8,  2019', 'startTime': '8:30', 'finishTime': '17:00', 'break': 15, 'hours': 8.25 }
      ]
    },
    { id: '2', weekEnding: 'April 07, 2019', totalHours: ' 76h 00m', isPaid: true, hoursWorked: [] },
    { id: '3', weekEnding: 'March 24, 2019', totalHours: ' 76h 00m', isPaid: true, hoursWorked: [] },
    { id: '4', weekEnding: 'March 03, 2019', totalHours: ' 82h 15m', isPaid: true, hoursWorked: [] },
    { id: '5', weekEnding: 'February 24, 2019', totalHours: ' 76h 00m', isPaid: true, hoursWorked: [] },
    { id: '6', weekEnding: 'February 10, 2019', totalHours: ' 76h 00m', isPaid: true, hoursWorked: [] },
    { id: '7', weekEnding: 'January 27, 2019', totalHours: ' 54h 30m', isPaid: true, hoursWorked: [] },
    { id: '7', weekEnding: 'January 13, 2019', totalHours: ' 76h 00m', isPaid: true, hoursWorked: [] },
    { id: '9', weekEnding: 'December 16, 2018', totalHours: ' 74h 15m', isPaid: true, hoursWorked: [] },
    { id: '10', weekEnding: 'December 30, 2018', totalHours: ' 88h 30m', isPaid: true, hoursWorked: [] }
  ];

  constructor() { }

  ngOnInit() {
  }

}
