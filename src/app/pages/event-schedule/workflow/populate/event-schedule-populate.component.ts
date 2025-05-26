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

@Component({
  selector: "app-event-schedule-populate",
  imports: [
    EventSelectorComponent,
    ScheduledEventListComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });

    console.log(this.items);
  }

  get items(): FormArray {
    return this.form.get("items") as FormArray;
  }

  addItem() {
    const group = this.fb.group({
      name: ["", Validators.required],
      description: [""],
    });
    this.items.push(group); // now items is FormArray of FormGroup
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    console.log("Form values:", this.form.value);
  }
}
