import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

import { EventScheduleWorkflowStore } from "../stores/event-schedule-workflow.store";

export const eventScheduleStepGuard: CanActivateFn = () => {
  const eventScheduleWorkflowStore = inject(EventScheduleWorkflowStore);
  const router = inject(Router);

  const currentStep = eventScheduleWorkflowStore.currentStep();

  if (currentStep > 1) {
    return true;
  }

  router.navigate(["/event-schedule/workflow"]);
  return false;
};
