import { Component } from "@angular/core";
import { OrganizerStore } from "../../core/stores/organizer.store";
import { OrganizerListComponent } from "./organizer-list/organizer-list.component";
import { OrganizerFormComponent } from "./organizer-form/organizer-form.component";

@Component({
  selector: "app-organizer",
  imports: [OrganizerListComponent, OrganizerFormComponent],
  templateUrl: "./organizer.component.html",
  styleUrl: "./organizer.component.scss",
  providers: [OrganizerStore],
})
export class OrganizerComponent {}
