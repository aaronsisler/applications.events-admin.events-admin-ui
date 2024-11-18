// Need to use the React-specific entry point to import `createApi`
import { Client } from "@/app/clients/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, CLIENTS_PATH } from "@/app/constants";

// Define a service using a base URL and expected endpoints
export const clientsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  reducerPath: "clientsApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Clients"],
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getClients: build.query<Client[], void>({
      query: () => CLIENTS_PATH,
    }),
  }),
});

// Hooks are auto-generated by RTK-Query
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetClientsQuery } = clientsApiSlice;
