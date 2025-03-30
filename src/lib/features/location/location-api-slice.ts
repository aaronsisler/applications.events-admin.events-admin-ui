import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  API_BASE_URL,
  ESTABLISHMENTS_PATH,
  LOCATIONS_PATH,
} from "../../constants";
import { Location } from "../../features/location/location";

interface LocationEnvelope {
  establishmentId: string;
  locations: Location[];
}

export const locationApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "locationApi",
  tagTypes: ["Location"],
  endpoints: (build) => ({
    getAllLocations: build.query<Location[], string>({
      query: (establishmentId: string) =>
        `${ESTABLISHMENTS_PATH}/${establishmentId}/${LOCATIONS_PATH}`,
      providesTags: ["Location"],
    }),
    postLocations: build.mutation<Location[], Partial<LocationEnvelope>>({
      query: ({ establishmentId, locations }) => ({
        url: `${ESTABLISHMENTS_PATH}/${establishmentId}/${LOCATIONS_PATH}`,
        method: "POST",
        body: locations,
      }),
      invalidatesTags: ["Location"],
    }),
  }),
});

export const { useGetAllLocationsQuery, usePostLocationsMutation } =
  locationApiSlice;
