import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
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
export class EventSchedulePopulateComponent {
  router = inject(Router);
  scheduledEventTypeOptions: string[] = enumToList(ScheduledEventType);
  scheduledEventIntervalOptions: string[] = enumToList(ScheduledEventInterval);
  scheduledEventDayOptions: string[] = enumToList(ScheduledEventDay);

  private readonly eventScheduleWorkflowStore = inject(
    EventScheduleWorkflowStore
  );

  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  form = this.fb.group({
    scheduledEvents: this.fb.array<FormGroup>([]),
  });

  get scheduledEventsFormArray(): FormArray {
    return this.form.get("scheduledEvents") as FormArray;
  }

  constructor() {
    effect(() => {
      const scheduledEvents: ScheduledEvent[] =
        this.eventScheduleWorkflowStore.scheduledEvents();

      // Sync form array length with store array length
      const formArray = this.scheduledEventsFormArray;

      // Remove extra controls
      while (formArray.length > scheduledEvents.length) {
        formArray.removeAt(formArray.length - 1);
      }

      // Add missing controls
      while (formArray.length < scheduledEvents.length) {
        const group = this.fb.group({
          establishmentId: ["", Validators.required],
          name: ["", Validators.required],
          description: [""],
          eventId: ["", Validators.required],
          category: [""],
          scheduledEventType: ["", Validators.required],
          scheduledEventInterval: [""],
          scheduledEventDay: [""],
          startTime: ["", Validators.required],
          endTime: ["", Validators.required],
          scheduledEventDate: [""],
        });

        // Setup valueChanges subscription to update store as before
        group.valueChanges
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((value) => {
            const idx = formArray.controls.indexOf(group);
            if (idx !== -1) {
              this.eventScheduleWorkflowStore.updateScheduledEvent(
                idx,
                value as ScheduledEvent
              );
            }
          });

        formArray.push(group);
      }

      // Now patch form group values without recreating controls
      scheduledEvents.forEach((scheduledEvent, i) => {
        const group = formArray.at(i) as FormGroup;
        if (group) {
          group.patchValue(scheduledEvent, { emitEvent: false });
        }
      });
    });
  }

  addScheduledEvent(event: Event) {
    this.eventScheduleWorkflowStore.addScheduledEvent({
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
    });
  }

  removeScheduledEvent(index: number) {
    this.eventScheduleWorkflowStore.removeScheduledEvent(index);
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
}
