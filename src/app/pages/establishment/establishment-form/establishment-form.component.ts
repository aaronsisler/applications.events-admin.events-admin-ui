import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { EstablishmentService } from "../../../core/services/establishment-service";

@Component({
  selector: "app-establishment-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./establishment-form.component.html",
  styleUrl: "./establishment-form.component.scss",
})
export class EstablishmentFormComponent {
  formGroup: FormGroup;
  establishmentService = inject(EstablishmentService);

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.required],
    });
  }

  handleSubmit() {
    console.log("Data");
    console.log(this.formGroup.value);
    this.establishmentService.postList([this.formGroup.value]).subscribe({
      next: (response) => {
        console.log("Success!", response);
        // Handle success (e.g., show a success message, reset the form)
      },
      error: (error) => {
        console.error("Error!", error);
        // Handle error (e.g., display an error message)
      },
    });
  }
}
