import { Component } from "@angular/core";
import { LocationListComponent } from "./location-list/location-list.component";
import { LocationFormComponent } from "./location-form/location-form.component";
import { LocationStore } from "../../core/stores/location.store";

@Component({
  selector: "app-location",
  imports: [LocationListComponent, LocationFormComponent],
  templateUrl: "./location.component.html",
  styleUrl: "./location.component.scss",
  providers: [LocationStore],
})
export class LocationComponent {}
