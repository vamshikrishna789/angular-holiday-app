import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHolidayComponent } from './detail-holiday.component';

describe('DetailHolidayComponent', () => {
  let component: DetailHolidayComponent;
  let fixture: ComponentFixture<DetailHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
