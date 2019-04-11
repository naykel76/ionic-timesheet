import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDetailPage } from './timesheet-detail.page';

describe('TimesheetDetailPage', () => {
  let component: TimesheetDetailPage;
  let fixture: ComponentFixture<TimesheetDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
