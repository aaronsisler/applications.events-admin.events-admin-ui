"use client";

import React from "react";
import { useSelector } from "react-redux";

import { getestablishmentId } from "../../lib/features/common/common-slice";
import { useGetAllEventSchedulesQuery } from "../../lib/features/event-schedule/event-schedule-api-slice";

const EventScheduleList = () => {
  const establishmentId = useSelector(getestablishmentId);
  const isestablishmentIdPopulated: boolean = !!establishmentId;

  const { data: eventSchedules, isError } = useGetAllEventSchedulesQuery(
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
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {eventSchedules?.map((eventSchedule, index) => (
            <tr key={index}>
              <td>{eventSchedule.eventScheduleId}</td>
              <td>{eventSchedule.name}</td>
              <td>{eventSchedule.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export { EventScheduleList };
