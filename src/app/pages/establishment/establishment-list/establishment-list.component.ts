import { Component, inject, OnInit } from "@angular/core";
import { Establishment } from "../establishment";
import { EstablishmentService } from "../../../core/services/establishment-service";
import { EstablishmentStore } from "../../../core/stores/establishment.store";

@Component({
  selector: "app-establishment-list",
  imports: [],
  templateUrl: "./establishment-list.component.html",
  styleUrl: "./establishment-list.component.scss",
})
export class EstablishmentListComponent implements OnInit {
  establishmentList: Establishment[] = [];
  readonly establishmentStore = inject(EstablishmentStore);

  ngOnInit(): void {
    this.establishmentStore.getAll();
  }
}
