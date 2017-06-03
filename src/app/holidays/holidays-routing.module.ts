import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { DetailHolidayComponent }  from './detail-holiday/detail-holiday.component';
import { ListHolidayComponent }  from './list-holiday/list-holiday.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Holiday'
    },
    children: [
      {
        path: 'detail-holiday/:name',
        component: DetailHolidayComponent,
        data: {
          title: 'Holiday details'
        }
      },
      {
        path: 'list-holiday',
        component: ListHolidayComponent,
        data: {
          title: 'Holiday List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidaysRoutingModule { }
