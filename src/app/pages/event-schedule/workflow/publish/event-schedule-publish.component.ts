import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";

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
  templateUrl: "./event-schedule-publish.component.html",
  styleUrl: "./event-schedule-publish.component.scss",
})
export class EventSchedulePublishComponent {
  formGroup: FormGroup;

  readonly userStore = inject(UserStore);
  readonly eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
      targetYear: ["", [Validators.required, Validators.pattern("^\\d{4}$")]],
      targetMonth: ["", [Validators.required, Validators.pattern("^\\d{2}$")]],
    });
  }

  handleSubmit() {
    this.eventScheduleWorkflowStore.publishEventSchedule(
      this.userStore.activatedEstablishmentId(),
      {
        ...this.formGroup.value,
        establishmentId: this.userStore.activatedEstablishmentId(),
        eventScheduleId: this.userStore.activatedEstablishmentId(),
        targetYear: this.formGroup.get("targetYear")?.value,
        targetMonth: this.formGroup.get("targetMonth")?.value,
      }
    );
    this.eventScheduleWorkflowStore.reset();
    this.router.navigate(["published-event-schedule"]);
  }
}
