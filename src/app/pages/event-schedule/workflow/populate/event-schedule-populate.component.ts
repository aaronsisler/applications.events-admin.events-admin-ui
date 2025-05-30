import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTimepickerModule } from "@angular/material/timepicker";

import { Event } from "../../../../core/models/event";
import { ScheduledEventType } from "../../../../core/models/scheduled-event-type";
import { ScheduledEventInterval } from "../../../../core/models/scheduled-event-interval";
import { ScheduledEventDay } from "../../../../core/models/scheduled-event-day";
import { EventStore } from "../../../../core/stores/event.store";
import { EventScheduleWorkflowStore } from "../../../../core/stores/event-schedule-workflow.store";
import { enumToList } from "../../../../core/utils/enum-to-list";
import { EventSelectorComponent } from "./event-selector/event-selector.component";
import { ScheduledEvent } from "../../../../core/models/scheduled-event";

@Component({
  standalone: true,

  selector: "app-event-schedule-populate",
  imports: [
    CommonModule,
    EventSelectorComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTimepickerModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  templateUrl: "./event-schedule-populate.component.html",
  styleUrl: "./event-schedule-populate.component.scss",
  providers: [EventStore, provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSchedulePopulateComponent implements OnInit {
  router = inject(Router);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  readonly eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);

  scheduledEventTypeOptions: string[] = enumToList(ScheduledEventType);
  scheduledEventIntervalOptions: string[] = enumToList(ScheduledEventInterval);
  scheduledEventDayOptions: string[] = enumToList(ScheduledEventDay);

  form = this.fb.group({
    scheduledEvents: this.fb.array<FormGroup>([]),
  });

  get scheduledEventsFormArray(): FormArray {
    return this.form.get("scheduledEvents") as FormArray;
  }

  ngOnInit() {
    const scheduledEvents: ScheduledEvent[] =
      this.eventScheduleWorkflowStore.scheduledEvents();

    scheduledEvents.forEach((scheduledEvent, i) => {
      this.addScheduleEventToFormArray(scheduledEvent);
    });
  }

  removeScheduledEvent(index: number) {
    this.eventScheduleWorkflowStore.removeScheduledEvent(index);
    this.scheduledEventsFormArray.removeAt(index);
  }

  checkScheduledEventTypeForGroupIsSingle(index: number): boolean {
    return (
      this.scheduledEventsFormArray.at(index).get("scheduledEventType")
        ?.value == "SINGLE"
    );
  }

  handleEmittedEvent(event: Event) {
    this.addScheduledEvent(event);
  }

  onSubmit() {
    console.log(
      "Form values:",
      this.eventScheduleWorkflowStore.scheduledEvents()
    );
    this.router.navigate(["/event-schedule/workflow/submit"]);
  }

  addScheduleEventToFormArray(scheduledEvent: ScheduledEvent) {
    const group = this.fb.group({
      establishmentId: [scheduledEvent.establishmentId, Validators.required],
      name: [scheduledEvent.name, Validators.required],
      description: [scheduledEvent.description],
      eventId: [scheduledEvent.eventId, Validators.required],
      category: [scheduledEvent.category],
      scheduledEventType: [
        scheduledEvent.scheduledEventType,
        Validators.required,
      ],
      scheduledEventInterval: [scheduledEvent.scheduledEventInterval],
      scheduledEventDay: [scheduledEvent.scheduledEventDay],
      startTime: [scheduledEvent.startTime, Validators.required],
      endTime: [scheduledEvent.endTime, Validators.required],
      scheduledEventDate: [scheduledEvent.scheduledEventDate],
    });

    group.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        let startTime;
        let endTime;
        let scheduledEventDate;
        // Handles the TimePicker format and converts to HH:MM:SS
        if (value.startTime) {
          const date = new Date(value.startTime);
          startTime = date.toLocaleTimeString("en-US", { hour12: false });
        }
        // Handles the TimePicker format and converts to HH:MM:SS
        if (value.endTime) {
          const date = new Date(value.endTime);
          endTime = date.toLocaleTimeString("en-US", { hour12: false });
        }
        // Handles the DatePicker format and converts to YYYY-MM-DD
        if (value.scheduledEventDate) {
          const date = new Date(value.scheduledEventDate);
          scheduledEventDate = date.toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
        }
        const idx = this.scheduledEventsFormArray.controls.indexOf(group);
        if (idx !== -1) {
          this.eventScheduleWorkflowStore.updateScheduledEvent(idx, {
            ...value,
            startTime,
            endTime,
            scheduledEventDate,
          } as ScheduledEvent);
        }
      });

    this.scheduledEventsFormArray.push(group);
  }

  addScheduledEvent(event: Event) {
    const scheduledEvent: ScheduledEvent = {
      eventScheduleId:
        this.eventScheduleWorkflowStore.eventSchedule()?.eventScheduleId || "",
      establishmentId: event.establishmentId,
      eventId: event.eventId,
      scheduledEventType: "",
      scheduledEventInterval: "",
      scheduledEventDay: "",
      startTime: "",
      endTime: "",
      scheduledEventDate: "",
      name: event.name,
      description: event.description,
    };

    this.eventScheduleWorkflowStore.addScheduledEvent(scheduledEvent);
    this.addScheduleEventToFormArray(scheduledEvent);
  }
}
