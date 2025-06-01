import { Component, inject, OnInit } from "@angular/core";
import { ScheduledEventListComponent } from "../submit/scheduled-event-list/scheduled-event-list.component";
import { EventScheduleWorkflowStore } from "../../../../core/stores/event-schedule-workflow.store";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";

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
  router = inject(Router);
  fb = inject(FormBuilder);

  formGroup!: FormGroup;

  handleSubmit(): void {
    this.eventScheduleWorkflowStore.createScheduledEvents();
    this.router.navigate(["event-schedule/workflow/publish"]);
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: [this.eventScheduleWorkflowStore.eventSchedule()?.name],
      description: [
        this.eventScheduleWorkflowStore.eventSchedule()?.description,
      ],
    });
  }
}
