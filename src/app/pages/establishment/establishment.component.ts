import { Component } from "@angular/core";
import { EstablishmentListComponent } from "./establishment-list/establishment-list.component";
import { EstablishmentFormComponent } from "./establishment-form/establishment-form.component";
import { EstablishmentStore } from "../../core/stores/establishment.store";

@Component({
  selector: "app-establishment",
  imports: [EstablishmentListComponent, EstablishmentFormComponent],
  templateUrl: "./establishment.component.html",
  styleUrl: "./establishment.component.scss",
  providers: [EstablishmentStore],
})
export class EstablishmentComponent {}
