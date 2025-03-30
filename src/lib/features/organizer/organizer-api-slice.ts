import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  API_BASE_URL,
  ESTABLISHMENTS_PATH,
  ORGANIZERS_PATH,
} from "../../constants";
import { Organizer } from "../../features/organizer/organizer";

interface OrganizerEnvelope {
  establishmentId: string;
  organizers: Organizer[];
}

export const organizerApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "organizerApi",
  tagTypes: ["Organizer"],
  endpoints: (build) => ({
    getAllOrganizers: build.query<Organizer[], string>({
      query: (establishmentId: string) =>
        `${ESTABLISHMENTS_PATH}/${establishmentId}/${ORGANIZERS_PATH}`,
      providesTags: ["Organizer"],
    }),
    postOrganizers: build.mutation<Organizer[], Partial<OrganizerEnvelope>>({
      query: ({ establishmentId, organizers }) => ({
        url: `${ESTABLISHMENTS_PATH}/${establishmentId}/${ORGANIZERS_PATH}`,
        method: "POST",
        body: organizers,
      }),
      invalidatesTags: ["Organizer"],
    }),
  }),
});

export const { useGetAllOrganizersQuery, usePostOrganizersMutation } =
  organizerApiSlice;
