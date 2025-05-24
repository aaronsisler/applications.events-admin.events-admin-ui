import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { EventSchedule } from "../models/event-schedule";
import { EventScheduleService } from "../services/event-schedule-service";

interface EventScheduleWorkflowState {
  eventSchedule: EventSchedule | undefined;
  hasError: boolean;
  isLoading: boolean;
}

const initialState: EventScheduleWorkflowState = {
  eventSchedule: undefined,
  hasError: false,
  isLoading: true,
};

export const EventScheduleWorkflowStore = signalStore(
  withState<EventScheduleWorkflowState>(initialState),
  withMethods((store) => {
    const eventScheduleService = inject(EventScheduleService);
    return {
      createAll: (
        establishmentId: string,
        eventSchedules: EventSchedule[]
      ): void => {
        eventScheduleService
          .postList(establishmentId, eventSchedules)
          .subscribe({
            next: (newEventSchedules) => {
              patchState(store, () => ({
                eventSchedule: newEventSchedules[0],
                isLoading: false,
              }));
            },
            error: (error) => {
              console.error("Failed to fetch event schedules", error);
              patchState(store, () => ({ hasError: true, isLoading: false }));
            },
          });
      },
    };
  })
);
