import { Component, inject, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormGroupDirective,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";

import { LocationStore } from "../../../core/stores/location.store";
import { UserStore } from "../../../core/stores/user.store";

@Component({
  selector: "app-location-form",
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./location-form.component.html",
  styleUrl: "./location-form.component.scss",
})
export class LocationFormComponent {
  formGroup: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  readonly userStore = inject(UserStore);
  readonly locationStore = inject(LocationStore);

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
    });
  }

  handleSubmit() {
    this.locationStore.postAll(this.userStore.activatedEstablishmentId(), [
      {
        ...this.formGroup.value,
        establishmentId: this.userStore.activatedEstablishmentId(),
      },
    ]);
    this.formGroup.reset();
    this.formDirective.resetForm();
  }
}
