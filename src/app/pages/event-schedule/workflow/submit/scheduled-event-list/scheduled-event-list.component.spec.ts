import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledEventListComponent } from './scheduled-event-list.component';

describe('ScheduledEventListComponent', () => {
  let component: ScheduledEventListComponent;
  let fixture: ComponentFixture<ScheduledEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledEventListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
