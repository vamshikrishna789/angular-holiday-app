import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'full-layout',
  templateUrl: './full-layout.component.html',
  styles: [
    `
    a {
    color: #07C;
    text-decoration: none;
    cursor: pointer;
  }
   
    `
  ]
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
