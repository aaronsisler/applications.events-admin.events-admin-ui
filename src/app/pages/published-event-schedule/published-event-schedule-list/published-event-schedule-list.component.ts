import { Component, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { PublishedEventScheduleStore } from "../../../core/stores/published-event-schedule.store";
import { UserStore } from "../../../core/stores/user.store";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-published-event-schedule-list",
  imports: [MatTableModule],
  templateUrl: "./published-event-schedule-list.component.html",
  styleUrl: "./published-event-schedule-list.component.scss",
  providers: [PublishedEventScheduleStore],
})
export class PublishedEventScheduleListComponent {
  readonly userStore = inject(UserStore);

  readonly publishedEventScheduleStore = inject(PublishedEventScheduleStore);
  displayedColumns: string[] = [
    "name",
    "targetYear",
    "targetMonth",
    "filename",
  ];

  ngOnInit(): void {
    this.publishedEventScheduleStore.getAll(
      this.userStore.activatedEstablishmentId()
    );
  }

  onNavigate(filename: string) {
    const urlParts = [
      environment.storageUrl,
      environment.storageFolder,
      this.userStore.activatedEstablishmentId(),
      filename,
    ];

    window.open(urlParts.join("/"), "_blank");
  }
}
