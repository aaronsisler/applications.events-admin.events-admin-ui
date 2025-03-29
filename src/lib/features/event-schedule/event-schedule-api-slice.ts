import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  API_BASE_URL,
  CLIENTS_PATH,
  EVENT_SCHEDULES_PATH,
} from "../../constants";
import { EventSchedule } from "../../features/event-schedule/event-schedule";

interface EventScheduleEnvelope {
  clientId: string;
  eventSchedules: EventSchedule[];
}

export const eventScheduleApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "eventScheduleApi",
  tagTypes: ["Event Schedule"],
  endpoints: (build) => ({
    getAllEventSchedules: build.query<EventSchedule[], string>({
      query: (clientId: string) =>
        `${CLIENTS_PATH}/${clientId}/${EVENT_SCHEDULES_PATH}`,
      providesTags: ["Event Schedule"],
    }),
    postEventSchedules: build.mutation<
      EventSchedule[],
      Partial<EventScheduleEnvelope>
    >({
      query: ({ clientId, eventSchedules }) => ({
        url: `${CLIENTS_PATH}/${clientId}/${EVENT_SCHEDULES_PATH}`,
        method: "POST",
        body: eventSchedules,
      }),
      invalidatesTags: ["Event Schedule"],
    }),
  }),
});

export const { useGetAllEventSchedulesQuery, usePostEventSchedulesMutation } =
  eventScheduleApiSlice;
