import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScheduleSubmitComponent } from './event-schedule-submit.component';

describe('EventScheduleSubmitComponent', () => {
  let component: EventScheduleSubmitComponent;
  let fixture: ComponentFixture<EventScheduleSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventScheduleSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventScheduleSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
