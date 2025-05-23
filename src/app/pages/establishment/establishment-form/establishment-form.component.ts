import { Component, inject, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormGroupDirective,
  NgForm,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";

import { EstablishmentStore } from "../../../core/stores/establishment.store";

@Component({
  selector: "app-establishment-form",
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],

  templateUrl: "./establishment-form.component.html",
  styleUrl: "./establishment-form.component.scss",
})
export class EstablishmentFormComponent {
  formGroup: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  readonly establishmentStore = inject(EstablishmentStore);

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
    });
  }

  handleSubmit() {
    this.establishmentStore.postAll([this.formGroup.value]);
    this.formGroup.reset();
    this.formDirective.resetForm();
  }
}
