import { Component } from "@angular/core";
import { ScheduledEventListComponent } from "../submit/scheduled-event-list/scheduled-event-list.component";

@Component({
  selector: "app-event-schedule-submit",
  imports: [ScheduledEventListComponent],
  templateUrl: "./event-schedule-submit.component.html",
  styleUrl: "./event-schedule-submit.component.scss",
})
export class EventScheduleSubmitComponent {}
