import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL, CLIENTS_PATH } from "../../constants";
import { Client } from "../../features/client/client";

interface ClientEnvelope {
  clients: Client[];
}

export const clientApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: "clientApi",
  tagTypes: ["Client"],
  endpoints: (build) => ({
    getClients: build.query<Client[], void>({
      query: () => CLIENTS_PATH,
      providesTags: ["Client"],
    }),
    postClients: build.mutation<Client[], Partial<ClientEnvelope>>({
      query: ({ clients }) => ({
        url: `${CLIENTS_PATH}}`,
        method: "POST",
        body: clients,
      }),
      invalidatesTags: ["Client"],
    }),
  }),
});

export const { useGetClientsQuery, usePostClientsMutation } = clientApiSlice;
