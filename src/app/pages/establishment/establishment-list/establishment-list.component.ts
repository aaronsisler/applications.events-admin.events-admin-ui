import { Component, inject, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { Establishment } from "../../../core/models/establishment";
import { EstablishmentStore } from "../../../core/stores/establishment.store";

@Component({
  selector: "app-establishment-list",
  imports: [MatTableModule],
  templateUrl: "./establishment-list.component.html",
  styleUrl: "./establishment-list.component.scss",
})
export class EstablishmentListComponent implements OnInit {
  establishmentList: Establishment[] = [];
  displayedColumns: string[] = ["id", "name"];

  readonly establishmentStore = inject(EstablishmentStore);

  ngOnInit(): void {
    this.establishmentStore.getAll();
  }
}
