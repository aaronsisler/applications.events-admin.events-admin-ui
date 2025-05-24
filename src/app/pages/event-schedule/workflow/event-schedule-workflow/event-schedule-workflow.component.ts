import { Component, inject, OnDestroy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { EventScheduleWorkflowStore } from "../../../../core/stores/event-schedule-workflow.store";

@Component({
  selector: "app-event-schedule-workflow",
  imports: [RouterOutlet],
  templateUrl: "./event-schedule-workflow.component.html",
  styleUrl: "./event-schedule-workflow.component.scss",
  providers: [],
})
export class EventScheduleWorkflowComponent implements OnDestroy {
  readonly eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);

  ngOnDestroy(): void {
    this.eventScheduleWorkflowStore.reset();
  }
}
