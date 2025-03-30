"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { getestablishmentId } from "../../../lib/features/common/common-slice";
import { usePostPublishedEventScheduleMutation } from "../../../lib/features/published-event-schedule/published-event-schedule-api-slice";
import { getPublishedEventSchedule } from "../../../lib/features/published-event-schedule/published-event-schedule-slice";
import { PublishedEventSchedule } from "../../../lib/features/published-event-schedule/published-event-schedule";

const SubmitPublishedEventScheduleForm = () => {
  const establishmentId: string = useSelector(getestablishmentId);
  const publishedEventSchedule: PublishedEventSchedule = useSelector(
    getPublishedEventSchedule
  );
  const [register] = usePostPublishedEventScheduleMutation();
  const router = useRouter();

  const handleSubmit = async ({
    establishmentId,
    publishedEventSchedule,
  }: {
    establishmentId: string;
    publishedEventSchedule: PublishedEventSchedule;
  }) => {
    const { error } = await register({
      establishmentId,
      publishedEventSchedule,
    });

    const wasPostSuccessful: boolean = error == undefined;

    // If there is no error during the POST, reset/clear the form
    if (wasPostSuccessful) {
      router.push("/published-event-schedule");
    } else {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-blue mt-5"
      onClick={() => handleSubmit({ establishmentId, publishedEventSchedule })}
    >
      Submit
    </button>
  );
};

export { SubmitPublishedEventScheduleForm };
