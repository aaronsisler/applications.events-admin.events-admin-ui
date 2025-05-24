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

import { EventScheduleWorkflowStore } from "../../../../core/stores/event-schedule-workflow.store";
import { UserStore } from "../../../../core/stores/user.store";

@Component({
  selector: "app-event-schedule-create",
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./event-schedule-create.component.html",
  styleUrl: "./event-schedule-create.component.scss",
})
export class EventScheduleCreateComponent {
  formGroup: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  readonly userStore = inject(UserStore);
  readonly eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
    });
  }

  handleSubmit() {
    this.eventScheduleWorkflowStore.createAll(
      this.userStore.activatedEstablishmentId(),
      [
        {
          ...this.formGroup.value,
          establishmentId: this.userStore.activatedEstablishmentId(),
        },
      ]
    );
    this.formGroup.reset();
    this.formDirective.resetForm();
  }
}
