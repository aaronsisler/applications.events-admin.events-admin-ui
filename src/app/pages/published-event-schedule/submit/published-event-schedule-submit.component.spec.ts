import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedEventScheduleSubmitComponent } from './published-event-schedule-submit.component';

describe('PublishedEventScheduleSubmitComponent', () => {
  let component: PublishedEventScheduleSubmitComponent;
  let fixture: ComponentFixture<PublishedEventScheduleSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedEventScheduleSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedEventScheduleSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
