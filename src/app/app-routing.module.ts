import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//layout

import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';


//component

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-holiday',
    //redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './holidays/holidays.module#HolidaysModule'
      }
    ]
  },
  { path: '**', redirectTo: '/list-holiday' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
