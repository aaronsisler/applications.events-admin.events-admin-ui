import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { Event } from "../models/event";
import { EventService } from "../services/event-service";

interface EventState {
  events: Event[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: EventState = {
  events: [],
  hasError: false,
  isLoading: true,
};

export const EventStore = signalStore(
  withState<EventState>(initialState),
  withMethods((store) => {
    const eventService = inject(EventService);
    return {
      getAll: (establishmentId: string): void => {
        eventService.getList(establishmentId).subscribe({
          next: (events) => {
            patchState(store, () => ({ events, isLoading: false }));
          },
          error: (error) => {
            console.error("Failed to fetch events", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
      createAll: (establishmentId: string, events: Event[]): void => {
        eventService.postList(establishmentId, events).subscribe({
          next: (newEvents) => {
            patchState(store, () => ({
              events: [...(store.events() || []), ...newEvents],
              isLoading: false,
            }));
          },
          error: (error) => {
            console.error("Failed to fetch events", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
