"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { object as zodObject, ZodTypeAny, string as zodString } from "zod";

import { FormInputField } from "../../app/common/form-input-field";
import { getestablishmentId } from "../../lib/features/common/common-slice";
import { usePostOrganizersMutation } from "../../lib/features/organizer/organizer-api-slice";

export type OrganizerFormData = {
  name: string;
};

const organizerSchema: ZodTypeAny = zodObject({
  name: zodString().min(1, { message: "Required" }),
});

const OrganizerForm = () => {
  const establishmentId = useSelector(getestablishmentId);
  const [register, { isError }] = usePostOrganizersMutation();

  const {
    register: registerFormInput,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrganizerFormData>({
    resolver: zodResolver(organizerSchema),
  });

  const onSubmit = async (name: string) => {
    const { error } = await register({
      establishmentId,
      organizers: [{ establishmentId, name }],
    });

    const wasPostSuccessful: boolean = error == undefined;

    // If there is no error during the POST, reset/clear the form
    if (wasPostSuccessful) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(({ name }: OrganizerFormData) => onSubmit(name))}
    >
      {isError && (
        <React.Fragment>
          <div>Something went wrong during submission!</div>
          <br />
        </React.Fragment>
      )}
      <FormInputField
        placeholder="Organizer Name"
        name="name"
        register={registerFormInput}
        error={errors.name}
      />
      <br />
      <input
        className="btn btn-blue mt-5"
        type="submit"
        value="Create Organizer"
      />
    </form>
  );
};

export { OrganizerForm };
