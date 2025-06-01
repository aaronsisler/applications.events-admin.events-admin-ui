import { Routes } from "@angular/router";
import { EventScheduleComponent } from "./pages/event-schedule/event-schedule.component";
import { PublishedEventScheduleComponent } from "./pages/published-event-schedule/published-event-schedule.component";

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
        loadComponent: () =>
          import(
            "./pages/event-schedule/event-schedule-list/event-schedule-list.component"
          ).then((c) => c.EventScheduleListComponent),
      },
      {
        path: "workflow",
        loadChildren: () =>
          import(
            "./pages/event-schedule/workflow/event-schedule-workflow-routing.module"
          ).then((m) => m.EventScheduleWorkflowRoutingModule),
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
    path: "published-event-schedule",
    component: PublishedEventScheduleComponent,
  },
];
