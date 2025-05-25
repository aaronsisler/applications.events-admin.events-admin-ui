import { Component } from "@angular/core";
import { EventSelectorComponent } from "./event-selector/event-selector.component";
import { EventStore } from "../../../../core/stores/event.store";
import { ScheduledEventListComponent } from "./scheduled-event-list/scheduled-event-list.component";

@Component({
  selector: "app-event-schedule-populate",
  imports: [EventSelectorComponent, ScheduledEventListComponent],
  templateUrl: "./event-schedule-populate.component.html",
  styleUrl: "./event-schedule-populate.component.scss",
  providers: [EventStore],
})
export class EventSchedulePopulateComponent {}
