import { Component, inject, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { Organizer } from "../../../core/models/organizer";
import { OrganizerStore } from "../../../core/stores/organizer.store";
import { UserStore } from "../../../core/stores/user.store";

@Component({
  selector: "app-organizer-list",
  imports: [MatTableModule],
  templateUrl: "./organizer-list.component.html",
  styleUrl: "./organizer-list.component.scss",
})
export class OrganizerListComponent implements OnInit {
  organizersList: Organizer[] = [];
  displayedColumns: string[] = ["id", "name"];

  readonly userStore = inject(UserStore);
  readonly organizerStore = inject(OrganizerStore);

  ngOnInit(): void {
    this.organizerStore.getAll(this.userStore.activatedEstablishmentId());
  }
}
