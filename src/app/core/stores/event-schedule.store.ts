import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { EventSchedule } from "../models/event-schedule";
import { EventScheduleService } from "../services/event-schedule-service";

interface EventScheduleState {
  eventSchedules: EventSchedule[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: EventScheduleState = {
  eventSchedules: [],
  hasError: false,
  isLoading: true,
};

export const EventScheduleStore = signalStore(
  withState<EventScheduleState>(initialState),
  withMethods((store) => {
    const eventScheduleService = inject(EventScheduleService);
    return {
      getAll: (establishmentId: string): void => {
        eventScheduleService.getList(establishmentId).subscribe({
          next: (eventSchedules) => {
            patchState(store, () => ({ eventSchedules, isLoading: false }));
          },
          error: (error) => {
            console.error("Failed to create event schedules", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
