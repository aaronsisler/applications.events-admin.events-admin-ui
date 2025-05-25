import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { EventStore } from "../../../../../core/stores/event.store";
import { EventScheduleWorkflowStore } from "../../../../../core/stores/event-schedule-workflow.store";
import { UserStore } from "../../../../../core/stores/user.store";
import { Event } from "../../../../../core/models/event";

@Component({
  selector: "app-event-selector",
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: "./event-selector.component.html",
  styleUrl: "./event-selector.component.scss",
})
export class EventSelectorComponent {
  readonly userStore = inject(UserStore);
  readonly eventStore = inject(EventStore);
  formGroup: FormGroup;

  readonly eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);
  selectedEvent!: Event;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      eventId: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.eventStore.getAll(this.userStore.activatedEstablishmentId());
  }

  handleButtonClick(): void {
    this.eventScheduleWorkflowStore.addScheduledEvent({
      establishmentId: this.userStore.activatedEstablishmentId(),
      eventId: this.selectedEvent?.eventId,
      name: this.selectedEvent?.name,
      description: this.selectedEvent?.description,
      category: this.selectedEvent?.category,
    });

    this.formGroup.reset();
  }

  handleSelect(input: any): void {
    this.selectedEvent = input;
  }
}
