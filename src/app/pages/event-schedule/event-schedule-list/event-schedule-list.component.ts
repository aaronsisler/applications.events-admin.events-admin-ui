import { Component, inject, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { Event } from "../../../core/models/event";
import { EventScheduleStore } from "../../../core/stores/event-schedule.store";
import { UserStore } from "../../../core/stores/user.store";

@Component({
  selector: "app-event-schedule-list",
  imports: [MatTableModule],
  templateUrl: "./event-schedule-list.component.html",
  styleUrl: "./event-schedule-list.component.scss",
})
export class EventScheduleListComponent {
  eventList: Event[] = [];
  displayedColumns: string[] = ["id", "name", "description"];

  readonly userStore = inject(UserStore);
  readonly eventScheduleStore = inject(EventScheduleStore);

  ngOnInit(): void {
    this.eventScheduleStore.getAll(this.userStore.activatedEstablishmentId());
  }
}
