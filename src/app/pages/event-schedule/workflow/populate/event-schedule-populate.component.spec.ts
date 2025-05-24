import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSchedulePopulateComponent } from './event-schedule-populate.component';

describe('EventSchedulePopulateComponent', () => {
  let component: EventSchedulePopulateComponent;
  let fixture: ComponentFixture<EventSchedulePopulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSchedulePopulateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSchedulePopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
