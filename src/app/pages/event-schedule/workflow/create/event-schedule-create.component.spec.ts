import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScheduleCreateComponent } from './event-schedule-create.component';

describe('EventScheduleCreateComponent', () => {
  let component: EventScheduleCreateComponent;
  let fixture: ComponentFixture<EventScheduleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventScheduleCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventScheduleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
