import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../app.service';
import { Holiday } from '../../_models/hoilday';
@Component({
  selector: 'detail-holiday',
  templateUrl: './detail-holiday.component.html',
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
md-card-title span{
      color: #00b7b7;
    font-weight: 600;
}
.form {
  width: 500px;
  // margin: 0 auto;
  padding: 20px 3px;
}

.full-width {
  width: 100%;
}
.mat-card-content {
    font-size: 16px;
}
  `]
})
export class DetailHolidayComponent implements OnInit {
  public holidayName: string;
  public holiday = new Holiday();
  public holidays: Holiday[];
  public errorMessage: any;
  constructor(private _route: ActivatedRoute,
    private _appService: AppService) { }

  ngOnInit() {
    this._route
      .params
      .subscribe(params => {
        this.holidayName = params['name'];
        this.getHolidayDetail(this.holidayName)
      });
  }

  getHolidayDetail(name) {
    this._appService.getHolidays()
      .subscribe(
      holidays => {
        this.holidays = holidays.holidays
        for(let i=0; i< this.holidays.length; i++){
          if(this.holidays[i].name == name){
            this.holiday = this.holidays[i];
          }
        }        
      },
      error => this.errorMessage = <any>error);   
    
  }
}
