import { Component } from "@angular/core";
import { PublishedEventScheduleListComponent } from "./published-event-schedule-list/published-event-schedule-list.component";

@Component({
  selector: "app-published-event-schedule",
  imports: [PublishedEventScheduleListComponent],
  templateUrl: "./published-event-schedule.component.html",
  styleUrl: "./published-event-schedule.component.scss",
})
export class PublishedEventScheduleComponent {}
