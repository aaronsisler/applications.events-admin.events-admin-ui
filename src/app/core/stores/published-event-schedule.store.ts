import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { PublishedEventSchedule } from "../models/published-event-schedule";
import { PublishedEventScheduleService } from "../services/published-event-schedule-service";

interface PublishedEventScheduleState {
  publishedEventSchedules: PublishedEventSchedule[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: PublishedEventScheduleState = {
  publishedEventSchedules: [],
  hasError: false,
  isLoading: true,
};

export const PublishedEventScheduleStore = signalStore(
  withState<PublishedEventScheduleState>(initialState),
  withMethods((store) => {
    const publishedEventScheduleService = inject(PublishedEventScheduleService);
    return {
      getAll: (establishmentId: string): void => {
        publishedEventScheduleService.getList(establishmentId).subscribe({
          next: (publishedEventSchedules) => {
            patchState(store, () => ({
              publishedEventSchedules,
              isLoading: false,
            }));
          },
          error: (error) => {
            console.error("Failed to fetch published event schedules", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
