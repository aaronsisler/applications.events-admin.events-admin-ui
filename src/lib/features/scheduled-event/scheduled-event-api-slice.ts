import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  API_BASE_URL,
  EVENT_SCHEDULES_PATH,
  SCHEDULED_EVENTS_PATH,
} from "../../constants";
import { EventSchedule } from "../../features/event-schedule/event-schedule";
import { ScheduledEvent } from "./scheduled-event";

interface EventScheduleEnvelope {
  eventScheduleId: string;
  scheduledEvents: ScheduledEvent[];
}

export const scheduledEventApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "scheduledEventApi",
  tagTypes: ["Scheduled Event"],
  endpoints: (build) => ({
    getAllScheduledEvents: build.query<EventSchedule[], string>({
      query: (eventScheduleId: string) =>
        `${EVENT_SCHEDULES_PATH}/${eventScheduleId}/${SCHEDULED_EVENTS_PATH}`,
      providesTags: ["Scheduled Event"],
    }),
    postScheduledEvents: build.mutation<
      EventSchedule[],
      Partial<EventScheduleEnvelope>
    >({
      query: ({ eventScheduleId, scheduledEvents }) => ({
        url: `${EVENT_SCHEDULES_PATH}/${eventScheduleId}/${SCHEDULED_EVENTS_PATH}`,
        method: "POST",
        body: scheduledEvents,
      }),
      invalidatesTags: ["Scheduled Event"],
    }),
  }),
});

export const { useGetAllScheduledEventsQuery, usePostScheduledEventsMutation } =
  scheduledEventApiSlice;
