import { func, oneOf, shape } from "prop-types";
import { TextField } from "@mui/material";
import React from "react";

import { SignatureTypes } from "./Signature";

export default function Field({ id, data, onChange, ...props }) {
  return (
    <TextField
      id={id}
      value={data[id]}
      onChange={onChange(id)}
      fullWidth
      variant="outlined"
      {...props}
    />
  );
}

export const FieldTypes = {
  data: shape(SignatureTypes),
  onChange: func.isRequired,
};

Field.propTypes = {
  id: oneOf(Object.keys(SignatureTypes)),
  ...FieldTypes,
};

Field.defaultProps = {
  data: {},
};
