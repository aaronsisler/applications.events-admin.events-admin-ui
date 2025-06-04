import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { EventSchedule } from "../models/event-schedule";
import { EventScheduleService } from "../services/event-schedule-service";
import { ScheduledEvent } from "../models/scheduled-event";
import { ScheduledEventService } from "../services/scheduled-event-service";
import { PublishedEventSchedule } from "../models/published-event-schedule";
import { PublishedEventScheduleService } from "../services/published-event-schedule-service";

interface EventScheduleWorkflowState {
  eventSchedule: EventSchedule | undefined;
  scheduledEvents: ScheduledEvent[];
  currentStep: number;
  hasError: boolean;
  isLoading: boolean;
  hasCompleted: boolean;
}

const initialState: EventScheduleWorkflowState = {
  eventSchedule: undefined,
  scheduledEvents: [],
  currentStep: 1,
  hasError: false,
  isLoading: true,
  hasCompleted: false,
};

export const EventScheduleWorkflowStore = signalStore(
  withState<EventScheduleWorkflowState>(initialState),
  withMethods((store) => {
    const eventScheduleService = inject(EventScheduleService);
    const scheduledEventService = inject(ScheduledEventService);
    const publishedEventScheduleService = inject(PublishedEventScheduleService);
    return {
      reset: (): void =>
        patchState(store, () => ({
          ...initialState,
        })),
      addScheduledEvent(scheduledEvent: ScheduledEvent) {
        patchState(store, () => ({
          scheduledEvents: [...store.scheduledEvents(), scheduledEvent],
        }));
      },

      updateScheduledEvent(index: number, updated: Partial<ScheduledEvent>) {
        const current = store.scheduledEvents();
        if (index < 0 || index >= current.length) {
          return;
        }

        const updatedList = current.map((scheduledEvent, i) =>
          i === index ? { ...scheduledEvent, ...updated } : scheduledEvent
        );

        patchState(store, () => ({ scheduledEvents: updatedList }));
      },
      removeScheduledEvent(index: number) {
        patchState(store, (state) => ({
          scheduledEvents: state.scheduledEvents.filter((_, i) => i !== index),
        }));
      },
      incrementStep: (): void =>
        patchState(store, () => ({
          currentStep: store.currentStep() + 1,
        })),
      decrementStep: (): void =>
        patchState(store, () => ({
          currentStep: store.currentStep() - 1,
        })),
      publishEventSchedule: (
        establishmentId: string,
        publishedEventSchedule: PublishedEventSchedule
      ): void => {
        publishedEventScheduleService
          .post(establishmentId, publishedEventSchedule)
          .subscribe({
            next: () => {
              patchState(store, () => ({ hasCompleted: true }));
            },
            error: (error) => {
              console.error("Failed to publish event schedule", error);
              patchState(store, () => ({ hasError: true, isLoading: false }));
            },
          });
      },
      createEventSchedule: (
        establishmentId: string,
        eventSchedule: EventSchedule
      ): void => {
        eventScheduleService
          .postList(establishmentId, [eventSchedule])
          .subscribe({
            next: (newEventSchedules) => {
              patchState(store, () => ({
                eventSchedule: newEventSchedules[0],
                isLoading: false,
              }));
            },
            error: (error) => {
              console.error("Failed to create event schedule", error);
              patchState(store, () => ({ hasError: true, isLoading: false }));
            },
          });
      },
      createScheduledEvents: (): void => {
        const eventScheduleId = store.eventSchedule()?.eventScheduleId;

        if (eventScheduleId == undefined) {
          throw Error("eventScheduleId is undefined");
        }

        scheduledEventService
          .postList(eventScheduleId, store.scheduledEvents())
          .subscribe({
            next: () => {},
            error: (error) => {
              console.error("Failed to create scheduled events", error);
              patchState(store, () => ({ hasError: true, isLoading: false }));
            },
          });
      },
    };
  })
);
