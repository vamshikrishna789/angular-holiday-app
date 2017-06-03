import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppSettings } from './app.settings';
import { Holiday } from './_models/hoilday';

@Injectable()
export class AppService {
  private _appSettings: AppSettings = new AppSettings();
  private _holidays: Holiday[];
  API_KEY = 'a61f3919-e356-4148-b745-7d82d49723b6';
  API_URL = 'https://holidayapi.com/v1/holidays';
  COUNTRY_CODE = 'US';
  HOLIDAY_YEAR = 2016;
  HOLIDAY_MONTH = 6;

  constructor(private _http: Http) { }


  getHolidays() {
    return this._http.get(this.API_URL + '?key=' + this.API_KEY + '&country=' + this.COUNTRY_CODE + '&year=' + this.HOLIDAY_YEAR + '&month=' + this.HOLIDAY_MONTH)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
