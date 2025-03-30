import React from "react";
import { EstablishmentList } from "./establishment-list";
import { EstablishmentForm } from "./establishment-form";

export default function EstablishmentsPage() {
  return (
    <React.Fragment>
      <br />
      <EstablishmentForm />
      <br />
      <hr />
      <br />
      <EstablishmentList />
    </React.Fragment>
  );
}
