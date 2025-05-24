import { Component, inject, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { Event } from "../../../core/models/event";
import { EventStore } from "../../../core/stores/event.store";
import { UserStore } from "../../../core/stores/user.store";

@Component({
  selector: "app-event-list",
  imports: [MatTableModule],
  templateUrl: "./event-list.component.html",
  styleUrl: "./event-list.component.scss",
})
export class EventListComponent implements OnInit {
  eventList: Event[] = [];
  displayedColumns: string[] = ["id", "name", "category", "description"];

  readonly userStore = inject(UserStore);
  readonly eventStore = inject(EventStore);

  ngOnInit(): void {
    this.eventStore.getAll(this.userStore.activatedEstablishmentId());
  }
}
