import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScheduleListComponent } from './event-schedule-list.component';

describe('EventScheduleListComponent', () => {
  let component: EventScheduleListComponent;
  let fixture: ComponentFixture<EventScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventScheduleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
