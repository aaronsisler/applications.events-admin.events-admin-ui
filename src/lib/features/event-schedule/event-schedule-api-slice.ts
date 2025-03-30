import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  API_BASE_URL,
  ESTABLISHMENTS_PATH,
  EVENT_SCHEDULES_PATH,
} from "../../constants";
import { EventSchedule } from "../../features/event-schedule/event-schedule";

interface EventScheduleEnvelope {
  establishmentId: string;
  eventSchedules: EventSchedule[];
}

export const eventScheduleApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "eventScheduleApi",
  tagTypes: ["Event Schedule"],
  endpoints: (build) => ({
    getAllEventSchedules: build.query<EventSchedule[], string>({
      query: (establishmentId: string) =>
        `${ESTABLISHMENTS_PATH}/${establishmentId}/${EVENT_SCHEDULES_PATH}`,
      providesTags: ["Event Schedule"],
    }),
    postEventSchedules: build.mutation<
      EventSchedule[],
      Partial<EventScheduleEnvelope>
    >({
      query: ({ establishmentId, eventSchedules }) => ({
        url: `${ESTABLISHMENTS_PATH}/${establishmentId}/${EVENT_SCHEDULES_PATH}`,
        method: "POST",
        body: eventSchedules,
      }),
      invalidatesTags: ["Event Schedule"],
    }),
  }),
});

export const { useGetAllEventSchedulesQuery, usePostEventSchedulesMutation } =
  eventScheduleApiSlice;
