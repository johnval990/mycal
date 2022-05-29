import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { useUpdateEffect } from "react-use";

const yearMin = 1900;
const yearMax = 9999;

const YearField = ({ value, onChange }) => {
  const [year, setYear] = useState(value);

  useEffect(() => {
    setYear(value);
  }, [value]);

  useUpdateEffect(() => {
    const handler = setTimeout(() => {
      if (year > yearMin && year < yearMax) {
        onChange(year);
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [onChange, year]);

  const validateYear = () => {
    if (year < yearMin || year > yearMax) {
      return setYear(value);
    }
    onChange(year);
  };

  return (
    <TextField
      name="year"
      id="year"
      label="Year"
      required={true}
      value={year}
      onChange={(e) => setYear(parseInt(e.target.value))}
      onBlur={() => validateYear()}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          validateYear();
        }
      }}
      inputProps={{
        step: 1,
        min: yearMin,
        max: yearMax,
        type: "number",
        pattern: "[0-9]*",
      }}
      fullWidth
    />
  );
};

YearField.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

YearField.defaultProps = {
  value: new Date().getFullYear(),
  onChange: () => {},
};

export default YearField;
