import { Component, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { Location } from "../../../core/models/location";
import { LocationStore } from "../../../core/stores/location.store";
import { UserStore } from "../../../core/stores/user.store";

@Component({
  selector: "app-location-list",
  imports: [MatTableModule],
  templateUrl: "./location-list.component.html",
  styleUrl: "./location-list.component.scss",
})
export class LocationListComponent {
  locationList: Location[] = [];
  displayedColumns: string[] = ["id", "name"];

  readonly userStore = inject(UserStore);
  readonly locationStore = inject(LocationStore);

  ngOnInit(): void {
    this.locationStore.getAll(this.userStore.activatedEstablishmentId());
  }
}
