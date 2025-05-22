import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedEventScheduleAssociateComponent } from './published-event-schedule-associate.component';

describe('PublishedEventScheduleAssociateComponent', () => {
  let component: PublishedEventScheduleAssociateComponent;
  let fixture: ComponentFixture<PublishedEventScheduleAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedEventScheduleAssociateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedEventScheduleAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
