import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { EventScheduleWorkflowStore } from "../../../../core/stores/event-schedule-workflow.store";

@Component({
  selector: "app-event-schedule-workflow",
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./event-schedule-workflow.component.html",
  styleUrl: "./event-schedule-workflow.component.scss",
  providers: [EventScheduleWorkflowStore],
})
export class EventScheduleWorkflowComponent {}
