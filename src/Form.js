import { Grid } from "@mui/material";
import React from "react";

import Field, { FieldTypes } from "./Field";

export default function Form(props) {
  return (
    <Grid
      component="form"
      autoComplete="on"
      container
      direction="column"
      spacing={4}
    >
      <Grid item>
        <Field id="name" label="Name" autoComplete="name" {...props} />
      </Grid>
      <Grid item>
        <Field
          id="title"
          label="Position"
          autoComplete="organization-title"
          {...props}
        />
      </Grid>
      <Grid item>
        <Field id="tel" label="Phone number" autoComplete="tel" {...props} />
      </Grid>
    </Grid>
  );
}

Form.propTypes = {
  ...FieldTypes,
};

Form.defaultProps = {
  data: {},
};
