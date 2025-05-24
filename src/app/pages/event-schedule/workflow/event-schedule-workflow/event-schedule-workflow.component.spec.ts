import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScheduleWorkflowComponent } from './event-schedule-workflow.component';

describe('EventScheduleWorkflowComponent', () => {
  let component: EventScheduleWorkflowComponent;
  let fixture: ComponentFixture<EventScheduleWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventScheduleWorkflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventScheduleWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
