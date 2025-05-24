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

import { EventStore } from "../../../core/stores/event.store";
import { UserStore } from "../../../core/stores/user.store";

@Component({
  selector: "app-event-form",
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./event-form.component.html",
  styleUrl: "./event-form.component.scss",
})
export class EventFormComponent {
  formGroup: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  readonly userStore = inject(UserStore);
  readonly eventStore = inject(EventStore);

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
      category: [""],
      description: [""],
    });
  }

  handleSubmit() {
    this.eventStore.createAll(this.userStore.activatedEstablishmentId(), [
      {
        ...this.formGroup.value,
        establishmentId: this.userStore.activatedEstablishmentId(),
      },
    ]);
    this.formGroup.reset();
    this.formDirective.resetForm();
  }
}
