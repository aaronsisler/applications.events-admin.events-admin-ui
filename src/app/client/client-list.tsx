"use client";

import React from "react";

import { useGetClientsQuery } from "../../lib/features/client/client-api-slice";

const ClientList = () => {
  const { data: clients, isError } = useGetClientsQuery();

  return (
    <React.Fragment>
      {isError && <div>Error!</div>}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {clients?.map((client, index) => (
            <tr key={index}>
              <td>{client.clientId}</td>
              <td>{client.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export { ClientList };
