import { Routes } from "@angular/router";
import { EventScheduleComponent } from "./pages/event-schedule/event-schedule.component";
import { ScheduledEventComponent } from "./pages/scheduled-event/scheduled-event.component";
import { PublishedEventScheduleComponent } from "./pages/published-event-schedule/published-event-schedule.component";
import { PublishedEventScheduleAssociateComponent } from "./pages/published-event-schedule/associate/published-event-schedule-associate.component";
import { PublishedEventScheduleSubmitComponent } from "./pages/published-event-schedule/submit/published-event-schedule-submit.component";
import { PublishedEventScheduleCreateComponent } from "./pages/published-event-schedule/create/published-event-schedule-create.component";
import { EventScheduleCreateComponent } from "./pages/event-schedule/workflow/create/event-schedule-create.component";
import { EventSchedulePopulateComponent } from "./pages/event-schedule/workflow/populate/event-schedule-populate.component";
import { EventScheduleSubmitComponent } from "./pages/event-schedule/workflow/submit/event-schedule-submit.component";
import { EventScheduleWorkflowComponent } from "./pages/event-schedule/workflow/event-schedule-workflow/event-schedule-workflow.component";
import { EventScheduleListComponent } from "./pages/event-schedule/event-schedule-list/event-schedule-list.component";

export const routes: Routes = [
  {
    path: "establishment",
    loadComponent: () =>
      import("./pages/establishment/establishment.component").then(
        (c) => c.EstablishmentComponent
      ),
  },
  {
    path: "event",
    loadComponent: () =>
      import("./pages/event/event.component").then((c) => c.EventComponent),
  },
  {
    path: "event-schedule",
    component: EventScheduleComponent,

    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      {
        path: "list",
        component: EventScheduleListComponent,
      },
      {
        path: "workflow",
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
    ],
  },
  {
    path: "location",
    loadComponent: () =>
      import("./pages/location/location.component").then(
        (c) => c.LocationComponent
      ),
  },
  {
    path: "organizer",
    loadComponent: () =>
      import("./pages/organizer/organizer.component").then(
        (c) => c.OrganizerComponent
      ),
  },
  {
    path: "scheduled-event",
    component: ScheduledEventComponent,
  },
  {
    path: "published-event-schedule",
    component: PublishedEventScheduleComponent,
  },
  {
    path: "published-event-schedule/create",
    component: PublishedEventScheduleCreateComponent,
  },
  {
    path: "published-event-schedule/associate",
    component: PublishedEventScheduleAssociateComponent,
  },
  {
    path: "published-event-schedule/submit",
    component: PublishedEventScheduleSubmitComponent,
  },
];
