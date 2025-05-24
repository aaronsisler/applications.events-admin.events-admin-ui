import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventScheduleWorkflowComponent } from "./event-schedule-workflow/event-schedule-workflow.component";
import { EventScheduleCreateComponent } from "./create/event-schedule-create.component";
import { EventSchedulePopulateComponent } from "./populate/event-schedule-populate.component";
import { EventScheduleSubmitComponent } from "./submit/event-schedule-submit.component";

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
      },
      {
        path: "submit",
        component: EventScheduleSubmitComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventScheduleWorkflowRoutingModule {}
