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

import { OrganizerStore } from "../../../core/stores/organizer.store";
import { UserStore } from "../../../core/stores/user.store";

@Component({
  selector: "app-organizer-form",
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./organizer-form.component.html",
  styleUrl: "./organizer-form.component.scss",
})
export class OrganizerFormComponent {
  formGroup: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  readonly userStore = inject(UserStore);
  readonly organizerStore = inject(OrganizerStore);

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
    });
  }

  handleSubmit() {
    this.organizerStore.postAll(this.userStore.activatedEstablishmentId(), [
      {
        ...this.formGroup.value,
        establishmentId: this.userStore.activatedEstablishmentId(),
      },
    ]);
    this.formGroup.reset();
    this.formDirective.resetForm();
  }
}
