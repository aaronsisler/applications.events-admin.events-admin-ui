import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventScheduleWorkflowComponent } from "./event-schedule-workflow/event-schedule-workflow.component";
import { EventScheduleCreateComponent } from "./create/event-schedule-create.component";
import { EventSchedulePopulateComponent } from "./populate/event-schedule-populate.component";
import { EventScheduleSubmitComponent } from "./submit/event-schedule-submit.component";
import { eventScheduleStepGuard } from "../../../core/guards/step.guard";
import { EventScheduleWorkflowStore } from "../../../core/stores/event-schedule-workflow.store";

const routes: Routes = [
  {
    path: "",
    component: EventScheduleWorkflowComponent,
    children: [
      { path: "", redirectTo: "create", pathMatch: "full" },
      {
        path: "create",
        component: EventScheduleCreateComponent,
      },
      {
        path: "populate",
        component: EventSchedulePopulateComponent,
        canActivate: [eventScheduleStepGuard],
      },
      {
        path: "submit",
        component: EventScheduleSubmitComponent,
        canActivate: [eventScheduleStepGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EventScheduleWorkflowStore],
})
export class EventScheduleWorkflowRoutingModule {}
