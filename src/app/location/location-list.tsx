"use client";

import React from "react";
import { useSelector } from "react-redux";

import { getestablishmentId } from "../../lib/features/common/common-slice";
import { useGetAllLocationsQuery } from "../../lib/features/location/location-api-slice";

const LocationList = () => {
  const establishmentId = useSelector(getestablishmentId);
  const isestablishmentIdPopulated: boolean = !!establishmentId;

  const { data: locations, isError } = useGetAllLocationsQuery(
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
          {locations?.map((location, index) => (
            <tr key={index}>
              <td>{location.locationId}</td>
              <td>{location.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export { LocationList };
