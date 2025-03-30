import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL, ESTABLISHMENTS_PATH } from "../../constants";
import { Establishment } from "../../features/establishment/establishment";

interface EstablishmentEnvelope {
  establishments: Establishment[];
}

export const establishmentApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "establishmentApi",
  tagTypes: ["Establishment"],
  endpoints: (build) => ({
    getEstablishments: build.query<Establishment[], void>({
      query: () => ESTABLISHMENTS_PATH,
      providesTags: ["Establishment"],
    }),
    postEstablishments: build.mutation<
      Establishment[],
      Partial<EstablishmentEnvelope>
    >({
      query: ({ establishments }) => ({
        url: `${ESTABLISHMENTS_PATH}}`,
        method: "POST",
        body: establishments,
      }),
      invalidatesTags: ["Establishment"],
    }),
  }),
});

export const { useGetEstablishmentsQuery, usePostEstablishmentsMutation } =
  establishmentApiSlice;
