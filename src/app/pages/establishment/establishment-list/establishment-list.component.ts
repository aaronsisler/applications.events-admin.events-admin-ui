import { Component, OnInit } from "@angular/core";
import { Establishment } from "../establishment";
import { EstablishmentService } from "../../../core/services/establishment-service";

@Component({
  selector: "app-establishment-list",
  imports: [],
  templateUrl: "./establishment-list.component.html",
  styleUrl: "./establishment-list.component.scss",
})
export class EstablishmentListComponent implements OnInit {
  establishmentList: Establishment[] = [];

  constructor(private establishmentService: EstablishmentService) {}

  ngOnInit(): void {
    this.establishmentService.getList().subscribe((data) => {
      this.establishmentList = data;
    });
  }
}
