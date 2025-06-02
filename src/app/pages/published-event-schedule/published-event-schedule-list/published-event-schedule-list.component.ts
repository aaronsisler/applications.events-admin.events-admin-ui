import { Component, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { PublishedEventScheduleStore } from "../../../core/stores/published-event-schedule.store";
import { UserStore } from "../../../core/stores/user.store";
import { environment } from "../../../../environments/environment";
import { CsvFileService } from "../../../core/services/csv-file-service";

@Component({
  selector: "app-published-event-schedule-list",
  imports: [MatTableModule],
  templateUrl: "./published-event-schedule-list.component.html",
  styleUrl: "./published-event-schedule-list.component.scss",
  providers: [PublishedEventScheduleStore],
})
export class PublishedEventScheduleListComponent {
  readonly userStore = inject(UserStore);
  readonly csvFileService = inject(CsvFileService);

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

  handleFileFetch(filename: string) {
    this.csvFileService
      .get(this.userStore.activatedEstablishmentId(), filename)
      .subscribe({
        next: (url) => {
          window.open(url, "_blank");
        },
        error: (error) => {
          console.error("Failed to fetch URL", error);
        },
      });
  }
}
