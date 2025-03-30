"use client";

import React from "react";
import { useSelector } from "react-redux";

import { getestablishmentId } from "../../lib/features/common/common-slice";
import { useGetAllEventsQuery } from "../../lib/features/event/event-api-slice";

const EventList = () => {
  const establishmentId = useSelector(getestablishmentId);
  const isestablishmentIdPopulated: boolean = !!establishmentId;

  const { data: events, isError } = useGetAllEventsQuery(establishmentId, {
    skip: !isestablishmentIdPopulated,
  });

  return (
    <React.Fragment>
      {isError && <div>Error!</div>}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location Id</th>
            <th>Description</th>
            <th>Category</th>
            <th>Created On</th>
            <th>Last Updated On</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event, index) => (
            <tr key={index}>
              <td>{event.eventId}</td>
              <td>{event.name}</td>
              <td>{event.locationId}</td>
              <td>{event.description}</td>
              <td>{event.category}</td>
              <td>{event.createdOn}</td>
              <td>{event.lastUpdatedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export { EventList };
