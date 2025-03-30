import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  API_BASE_URL,
  ESTABLISHMENTS_PATH,
  PUBLISHED_EVENT_SCHEDULES_PATH,
} from "../../constants";
import { PublishedEventSchedule } from "./published-event-schedule";

interface PublishedEventScheduleEnvelope {
  establishmentId: string;
  publishedEventSchedule: PublishedEventSchedule;
}

export const publishedEventScheduleApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "publishedEventScheduleApi",
  tagTypes: ["Published Event Schedule"],
  endpoints: (build) => ({
    getAllPublishedEventSchedules: build.query<
      PublishedEventSchedule[],
      string
    >({
      query: (establishmentId: string) =>
        `${ESTABLISHMENTS_PATH}/${establishmentId}/${PUBLISHED_EVENT_SCHEDULES_PATH}`,
      providesTags: ["Published Event Schedule"],
    }),
    postPublishedEventSchedule: build.mutation<
      PublishedEventSchedule,
      Partial<PublishedEventScheduleEnvelope>
    >({
      query: ({ establishmentId, publishedEventSchedule }) => ({
        url: `${ESTABLISHMENTS_PATH}/${establishmentId}/${PUBLISHED_EVENT_SCHEDULES_PATH}`,
        method: "POST",
        body: publishedEventSchedule,
      }),
      invalidatesTags: ["Published Event Schedule"],
    }),
  }),
});

export const {
  useGetAllPublishedEventSchedulesQuery,
  usePostPublishedEventScheduleMutation,
} = publishedEventScheduleApiSlice;
