"use client";

import React from "react";
import { useSelector } from "react-redux";

import { FILE_STORAGE_BASE_URL } from "../../lib/constants";
import { getestablishmentId } from "../../lib/features/common/common-slice";
import { useGetAllPublishedEventSchedulesQuery } from "../../lib/features/published-event-schedule/published-event-schedule-api-slice";

const PublishedEventScheduleList = () => {
  const establishmentId = useSelector(getestablishmentId);
  const isestablishmentIdPopulated: boolean = !!establishmentId;

  const { data: publishedEventSchedules, isError } =
    useGetAllPublishedEventSchedulesQuery(establishmentId, {
      skip: !isestablishmentIdPopulated,
    });

  return (
    <React.Fragment>
      {isError && <div>Error!</div>}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Created On</th>
            <th>Name</th>
            <th>File Name</th>
          </tr>
        </thead>
        <tbody>
          {publishedEventSchedules?.map((publishedEventSchedule, index) => (
            <tr key={index}>
              <td>{publishedEventSchedule.publishedEventScheduleId}</td>
              <td>{publishedEventSchedule.createdOn}</td>
              <td>{publishedEventSchedule.name}</td>
              <td>
                <a
                  href={`${FILE_STORAGE_BASE_URL}/${establishmentId}/${publishedEventSchedule.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publishedEventSchedule.filename}
                </a>
              </td>
              {/* <td>{publishedEventSchedule.filename}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export { PublishedEventScheduleList };
