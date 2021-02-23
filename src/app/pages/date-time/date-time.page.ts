import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];

  pickerOptions = {
    buttons:[
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Log.');
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha = (data) => {
    console.log(data);
    console.log(new Date(data.detail.value));
  }

}
