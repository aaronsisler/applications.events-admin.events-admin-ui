import { Component } from "@angular/core";
import { EventSelectorComponent } from "./event-selector/event-selector.component";
import { EventStore } from "../../../../core/stores/event.store";
import { ScheduledEventListComponent } from "./scheduled-event-list/scheduled-event-list.component";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { Event } from "../../../../core/models/event";
import { ScheduledEvent } from "../../../../core/models/scheduled-event";
import { MatSelectModule } from "@angular/material/select";
import { ScheduledEventType } from "../../../../core/models/scheduled-event-type";
import { enumToList } from "../../../../core/utils/enum-to-list";
import { ScheduledEventInterval } from "../../../../core/models/scheduled-event-interval";
import { ScheduledEventDay } from "../../../../core/models/scheduled-event-day";

@Component({
  selector: "app-event-schedule-populate",
  imports: [
    EventSelectorComponent,
    ScheduledEventListComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: "./event-schedule-populate.component.html",
  styleUrl: "./event-schedule-populate.component.scss",
  providers: [EventStore],
})
export class EventSchedulePopulateComponent {
  form: FormGroup;

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
    console.log(event);
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
  }
}
