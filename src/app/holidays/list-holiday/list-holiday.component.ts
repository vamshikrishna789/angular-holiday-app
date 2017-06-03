import { Component, OnInit } from '@angular/core';

import { Holiday } from '../../_models/hoilday';

import { AppService } from '../../app.service';
import {AppSettings} from '../../app.settings';

@Component({
  selector: 'list-holiday',
  templateUrl: './list-holiday.component.html',
  styles: [`
   md-card{
    padding:10px;
}
md-card-header{
    background-color: gainsboro;
    padding-top: 14px;    
}
.mat-card-header .mat-card-title {
    font-size: 18px;
}
.filter{
  padding: 26px 10px 2px 6px;
}
  `]
})
export class ListHolidayComponent implements OnInit {
  public holidays: Holiday[];
  public errorMessage: any;
  public year = this._appService.HOLIDAY_YEAR;
  public years = [2015,2016,2017];
  public countries = ['AR', 'AU', 'US', 'ZW'];
  public country = this._appService.COUNTRY_CODE;
  public months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  public month = this._appService.HOLIDAY_MONTH; //should be one add

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.getHolidays();
  }
  getHolidays() {
    this._appService.getHolidays()
      .subscribe(
      holidays => this.holidays = holidays.holidays,
      error => this.errorMessage = <any>error);
  }
  onChangeYear(){
    this._appService.HOLIDAY_YEAR = this.year;
    this.getHolidays();
  }
  onChangeCountry(){
    this._appService.COUNTRY_CODE = this.country;
    this.getHolidays();
  }
   onChangeMonth(){
     console.log(this._appService.HOLIDAY_MONTH);
    this._appService.HOLIDAY_MONTH = this.month + 1;//maintain 0 indexing
    this.getHolidays();
  }
}
