"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object as zodObject, ZodTypeAny, string as zodString } from "zod";

import { FormInputField } from "../common/form-input-field";
import { usePostEstablishmentsMutation } from "../../lib/features/establishment/establishment-api-slice";

export type EstablishmentFormData = {
  name: string;
};

const establishmentSchema: ZodTypeAny = zodObject({
  establishmentId: zodString().min(1, { message: "Required" }),
});

const EstablishmentForm = () => {
  const [register, { isError }] = usePostEstablishmentsMutation();

  const {
    register: registerFormInput,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EstablishmentFormData>({
    resolver: zodResolver(establishmentSchema),
  });

  const onSubmit = async (name: string) => {
    const { error } = await register({ establishments: [{ name }] });

    const wasPostSuccessful: boolean = error == undefined;

    // If there is no error during the POST, reset/clear the form
    if (wasPostSuccessful) {
      reset();
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(({ name }: EstablishmentFormData) =>
          onSubmit(name)
        )}
      >
        {isError && (
          <React.Fragment>
            <div>Something went wrong during submission!</div>
            <br />
          </React.Fragment>
        )}
        <FormInputField
          placeholder="Establishment Name"
          name="name"
          register={registerFormInput}
          error={errors.name}
        />
        <br />
        <input
          className="btn btn-blue mt-5"
          type="submit"
          value="Create Establishment"
        />
      </form>
    </React.Fragment>
  );
};

export { EstablishmentForm };
