import { Component, inject, OnInit } from "@angular/core";
import { ScheduledEventListComponent } from "../submit/scheduled-event-list/scheduled-event-list.component";
import { EventScheduleWorkflowStore } from "../../../../core/stores/event-schedule-workflow.store";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-event-schedule-submit",
  imports: [
    ReactiveFormsModule,
    ScheduledEventListComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: "./event-schedule-submit.component.html",
  styleUrl: "./event-schedule-submit.component.scss",
})
export class EventScheduleSubmitComponent implements OnInit {
  readonly eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: [""],
      description: [""],
    });
  }

  ngOnInit() {
    this.formGroup
      .get("name")
      ?.patchValue(this.eventScheduleWorkflowStore.eventSchedule()?.name);
    this.formGroup
      .get("description")
      ?.patchValue(
        this.eventScheduleWorkflowStore.eventSchedule()?.description
      );
  }
}
