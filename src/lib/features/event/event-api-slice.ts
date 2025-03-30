import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  API_BASE_URL,
  ESTABLISHMENTS_PATH,
  EVENTS_PATH,
} from "../../constants";
import { Event } from "../../features/event/event";

interface EventEnvelope {
  establishmentId: string;
  events: Event[];
}

export const eventApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "eventApi",
  tagTypes: ["Event"],
  endpoints: (build) => ({
    getAllEvents: build.query<Event[], string>({
      query: (establishmentId: string) =>
        `${ESTABLISHMENTS_PATH}/${establishmentId}/${EVENTS_PATH}`,
      providesTags: ["Event"],
    }),
    postEvents: build.mutation<Event[], Partial<EventEnvelope>>({
      query: ({ establishmentId, events }) => ({
        url: `${ESTABLISHMENTS_PATH}/${establishmentId}/${EVENTS_PATH}`,
        method: "POST",
        body: events,
      }),
      invalidatesTags: ["Event"],
    }),
  }),
});

export const { useGetAllEventsQuery, usePostEventsMutation } = eventApiSlice;
