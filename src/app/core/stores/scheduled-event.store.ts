import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { ScheduledEventService } from "../services/scheduled-event-service";
import { ScheduledEvent } from "../models/scheduled-event";

interface ScheduledEventState {
  scheduledEvents: ScheduledEvent[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: ScheduledEventState = {
  scheduledEvents: [],
  hasError: false,
  isLoading: true,
};

export const ScheduledEventStore = signalStore(
  withState<ScheduledEventState>(initialState),
  withMethods((store) => {
    const scheduledEventService = inject(ScheduledEventService);
    return {
      getAll: (eventScheduleId: string): void => {
        scheduledEventService.getList(eventScheduleId).subscribe({
          next: (scheduledEvents) => {
            patchState(store, () => ({ scheduledEvents, isLoading: false }));
          },
          error: (error) => {
            console.error("Failed to fetch scheduled events", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
