"use client";

import React from "react";
import { useSelector } from "react-redux";

import { getestablishmentId } from "../../lib/features/common/common-slice";
import { useGetAllOrganizersQuery } from "../../lib/features/organizer/organizer-api-slice";

const OrganizerList = () => {
  const establishmentId = useSelector(getestablishmentId);
  const isestablishmentIdPopulated: boolean = !!establishmentId;

  const { data: organizers, isError } = useGetAllOrganizersQuery(
    establishmentId,
    {
      skip: !isestablishmentIdPopulated,
    }
  );

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
          {organizers?.map((organizer, index) => (
            <tr key={index}>
              <td>{organizer.organizerId}</td>
              <td>{organizer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export { OrganizerList };
