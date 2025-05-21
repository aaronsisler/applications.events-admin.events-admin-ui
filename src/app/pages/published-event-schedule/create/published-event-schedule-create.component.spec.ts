import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedEventScheduleCreateComponent } from './published-event-schedule-create.component';

describe('PublishedEventScheduleCreateComponent', () => {
  let component: PublishedEventScheduleCreateComponent;
  let fixture: ComponentFixture<PublishedEventScheduleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedEventScheduleCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedEventScheduleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
