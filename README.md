# application.event-admin.events-admin-ui

// form-component.ts
import { Component, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormStore } from './form.store';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-dynamic-form',
standalone: true,
imports: [ReactiveFormsModule, CommonModule],
template: `  <form [formGroup]="form">
      <div *ngFor="let control of controls(); let i = index">
        <label>{{ control.name }}</label>
        <input
          type="text"
          [formControlName]="control.id"
          (input)="onInputChange(control.id, $any($event.target).value)"
        />
        <button (click)="removeControl(control.id)">Remove</button>
      </div>
      <button (click)="addControl()">Add Control</button>
    </form>`,
})
export class DynamicFormComponent {
private formBuilder = inject(FormBuilder);
private formStore = inject(FormStore);
form = new FormGroup({});
controls = computed(() => this.formStore.controls());

constructor() {
this.controls().forEach((control) => {
this.form.addControl(control.id.toString(), this.formBuilder.control(control.value));
});
}

addControl() {
const id = Date.now();
this.formStore.addControl({ id, name: `Control ${id}`, value: '' });
this.form.addControl(id.toString(), this.formBuilder.control(''));
}

removeControl(id: number) {
this.formStore.removeControl(id);
this.form.removeControl(id.toString());
}

onInputChange(id: number, value: string) {
this.formStore.updateControl(id, value);
}
}
