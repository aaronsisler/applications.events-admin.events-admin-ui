import { Component } from "@angular/core";
import { EventFormComponent } from "./event-form/event-form.component";
import { EventListComponent } from "./event-list/event-list.component";

import { EventStore } from "../../core/stores/event.store";

@Component({
  selector: "app-event",
  imports: [EventFormComponent, EventListComponent],
  templateUrl: "./event.component.html",
  styleUrl: "./event.component.scss",
  providers: [EventStore],
})
export class EventComponent {}
