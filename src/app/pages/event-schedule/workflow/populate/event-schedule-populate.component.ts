import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
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

import { EventSelectorComponent } from "./event-selector/event-selector.component";
import { EventStore } from "../../../../core/stores/event.store";
import { Event } from "../../../../core/models/event";
import { ScheduledEventType } from "../../../../core/models/scheduled-event-type";
import { enumToList } from "../../../../core/utils/enum-to-list";
import { ScheduledEventInterval } from "../../../../core/models/scheduled-event-interval";
import { ScheduledEventDay } from "../../../../core/models/scheduled-event-day";
import { EventScheduleWorkflowStore } from "../../../../core/stores/event-schedule-workflow.store";

@Component({
  selector: "app-event-schedule-populate",
  imports: [
    EventSelectorComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTimepickerModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  templateUrl: "./event-schedule-populate.component.html",
  styleUrl: "./event-schedule-populate.component.scss",
  providers: [EventStore, provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSchedulePopulateComponent {
  form: FormGroup;
  router = inject(Router);

  scheduledEventTypeOptions: string[] = enumToList(ScheduledEventType);
  scheduledEventIntervalOptions: string[] = enumToList(ScheduledEventInterval);
  scheduledEventDayOptions: string[] = enumToList(ScheduledEventDay);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });
  }

  get items(): FormArray {
    return this.form.get("items") as FormArray;
  }

  handleEmittedEvent(event: Event) {
    this.addItem(event);
  }

  addItem(rawEvent: Event) {
    const group = this.fb.group({
      establishmentId: [rawEvent.establishmentId, Validators.required],
      eventId: [rawEvent.eventId, Validators.required],
      name: [rawEvent.name, Validators.required],
      category: [rawEvent.category],
      description: [rawEvent.description],
      scheduledEventType: ["", Validators.required],
      scheduledEventInterval: [""],
      scheduledEventDay: [""],
      startTime: ["", Validators.required],
      endTime: ["", Validators.required],
      scheduledEventDate: [""],
    });
    this.items.push(group);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    console.log("Form values:", this.form.value);
    // this.router.navigate(["/event-schedule/workflow/submit"]);
  }
}
