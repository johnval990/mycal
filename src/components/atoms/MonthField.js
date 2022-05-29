import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthField = ({ value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="month">Month</InputLabel>
      <Select
        labelId="month"
        id="month"
        label="Month"
        fullWidth
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {months.map((item, index) => (
          <MenuItem key={item} value={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

MonthField.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

MonthField.defaultProps = {
  value: new Date().getMonth(),
  onChange: () => {},
};

export default MonthField;
