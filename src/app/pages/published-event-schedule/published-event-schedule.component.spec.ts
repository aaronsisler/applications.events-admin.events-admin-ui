import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedEventScheduleComponent } from './published-event-schedule.component';

describe('PublishedEventScheduleComponent', () => {
  let component: PublishedEventScheduleComponent;
  let fixture: ComponentFixture<PublishedEventScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedEventScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedEventScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
