import { Routes } from "@angular/router";
import { EstablishmentComponent } from "./pages/establishment/establishment.component";
import { EventComponent } from "./pages/event/event.component";
import { EventScheduleComponent } from "./pages/event-schedule/event-schedule.component";
import { OrganizerComponent } from "./pages/organizer/organizer.component";
import { ScheduledEventComponent } from "./pages/scheduled-event/scheduled-event.component";
import { PublishedEventScheduleComponent } from "./pages/published-event-schedule/published-event-schedule.component";
import { PublishedEventScheduleAssociateComponent } from "./pages/published-event-schedule/associate/published-event-schedule-associate.component";
import { PublishedEventScheduleSubmitComponent } from "./pages/published-event-schedule/submit/published-event-schedule-submit.component";
import { PublishedEventScheduleCreateComponent } from "./pages/published-event-schedule/create/published-event-schedule-create.component";
import { EventScheduleCreateComponent } from "./pages/event-schedule/create/event-schedule-create.component";
import { EventSchedulePopulateComponent } from "./pages/event-schedule/populate/event-schedule-populate.component";
import { EventScheduleSubmitComponent } from "./pages/event-schedule/submit/event-schedule-submit.component";

export const routes: Routes = [
  {
    path: "establishment",
    component: EstablishmentComponent,
  },
  {
    path: "event",
    component: EventComponent,
  },
  {
    path: "event-schedule",
    component: EventScheduleComponent,
  },
  {
    path: "event-schedule/create",
    component: EventScheduleCreateComponent,
  },
  {
    path: "event-schedule/populate",
    component: EventSchedulePopulateComponent,
  },
  {
    path: "event-schedule/submit",
    component: EventScheduleSubmitComponent,
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
    component: OrganizerComponent,
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
