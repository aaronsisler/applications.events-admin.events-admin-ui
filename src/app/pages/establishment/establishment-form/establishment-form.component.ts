import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { EstablishmentService } from "../../../core/services/establishment-service";
import { EstablishmentStore } from "../../../core/stores/establishment.store";

@Component({
  selector: "app-establishment-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./establishment-form.component.html",
  styleUrl: "./establishment-form.component.scss",
})
export class EstablishmentFormComponent {
  formGroup: FormGroup;
  establishmentService = inject(EstablishmentService);
  readonly establishmentStore = inject(EstablishmentStore);

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
    });
  }

  handleSubmit() {
    this.establishmentStore.postAll([this.formGroup.value]);
    this.formGroup.reset();
  }
}
