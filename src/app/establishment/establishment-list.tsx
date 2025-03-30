"use client";

import React from "react";

import { useGetEstablishmentsQuery } from "../../lib/features/establishment/establishment-api-slice";

const EstablishmentList = () => {
  const { data: establishments, isError } = useGetEstablishmentsQuery();

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
          {establishments?.map((establishment, index) => (
            <tr key={index}>
              <td>{establishment.establishmentId}</td>
              <td>{establishment.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export { EstablishmentList };
