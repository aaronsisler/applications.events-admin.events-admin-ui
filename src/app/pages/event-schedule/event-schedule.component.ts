import { Component } from "@angular/core";

import { EventScheduleStore } from "../../core/stores/event-schedule.store";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-event-schedule",
  imports: [RouterOutlet],
  templateUrl: "./event-schedule.component.html",
  styleUrl: "./event-schedule.component.scss",
  providers: [EventScheduleStore],
})
export class EventScheduleComponent {}
