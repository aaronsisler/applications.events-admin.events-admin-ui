import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { EventSchedule } from "../models/event-schedule";
import { EventScheduleService } from "../services/event-schedule-service";
import { ScheduledEvent } from "../models/scheduled-event";

interface EventScheduleWorkflowState {
  eventSchedule: EventSchedule | undefined;
  scheduledEvents: ScheduledEvent[];
  currentStep: number;
  hasError: boolean;
  isLoading: boolean;
}

const initialState: EventScheduleWorkflowState = {
  eventSchedule: undefined,
  scheduledEvents: [],
  currentStep: 1,
  hasError: false,
  isLoading: true,
};

export const EventScheduleWorkflowStore = signalStore(
  withState<EventScheduleWorkflowState>(initialState),
  withMethods((store) => {
    const eventScheduleService = inject(EventScheduleService);
    return {
      reset: (): void =>
        patchState(store, () => ({
          ...initialState,
        })),
      addScheduledEvent: (scheduledEvent: ScheduledEvent): void =>
        patchState(store, () => ({
          scheduledEvents: [...store.scheduledEvents(), scheduledEvent],
        })),
      updateScheduledEvent: (
        index: number,
        scheduledEvent: ScheduledEvent
      ): void =>
        patchState(store, () => ({
          scheduledEvents: [
            ...store.scheduledEvents().slice(0, index),
            scheduledEvent,
            ...store.scheduledEvents().slice(index + 1),
          ],
        })),
      incrementStep: (): void =>
        patchState(store, () => ({
          currentStep: store.currentStep() + 1,
        })),
      decrementStep: (): void =>
        patchState(store, () => ({
          currentStep: store.currentStep() - 1,
        })),
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
