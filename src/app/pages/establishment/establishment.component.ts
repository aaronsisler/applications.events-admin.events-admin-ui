import { Component } from "@angular/core";
import { EstablishmentListComponent } from "./establishment-list/establishment-list.component";
import { EstablishmentFormComponent } from "./establishment-form/establishment-form.component";

@Component({
  selector: "app-establishment",
  imports: [EstablishmentListComponent, EstablishmentFormComponent],
  templateUrl: "./establishment.component.html",
  styleUrl: "./establishment.component.scss",
})
export class EstablishmentComponent {}
