import { Component, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { EventScheduleWorkflowStore } from "../../../../../core/stores/event-schedule-workflow.store";

@Component({
  selector: "app-scheduled-event-list",
  imports: [MatTableModule],
  templateUrl: "./scheduled-event-list.component.html",
  styleUrl: "./scheduled-event-list.component.scss",
})
export class ScheduledEventListComponent {
  readonly eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);
  displayedColumns: string[] = [
    "name",
    "scheduledEventType",
    "scheduledEventInterval",
    "scheduledEventDay",
    "startTime",
    "endTime",
    "scheduledEventDate",
    "category",
    "description",
  ];
}
