import { Component } from "@angular/core";
import { EstablishmentListComponent } from "./establishment-list/establishment-list.component";

@Component({
  selector: "app-establishment",
  imports: [EstablishmentListComponent],
  templateUrl: "./establishment.component.html",
  styleUrl: "./establishment.component.scss",
})
export class EstablishmentComponent {}
