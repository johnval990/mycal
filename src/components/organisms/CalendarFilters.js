import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid } from "@mui/material";
import { useUpdateEffect } from "react-use";
import YearField from "../atoms/YearField";
import MonthField from "../atoms/MonthField";
import { isThisMonth, isThisYear } from "date-fns";

const CalendarFilters = ({ date, onChange }) => {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const currentDate = new Date(year, month, 1);

  useUpdateEffect(() => {
    onChange(currentDate);
  }, [year, month]);

  const handleTodayClick = () => {
    const newDate = new Date();
    setYear(newDate.getFullYear());
    setMonth(newDate.getMonth());
  };

  return (
    <Box component="form" noValidate sx={{ mb: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <YearField value={year} onChange={setYear} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <MonthField value={month} onChange={setMonth} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            type="button"
            fullWidth
            size="large"
            variant="contained"
            sx={{ height: "100%" }}
            onClick={handleTodayClick}
            disabled={isThisMonth(currentDate) && isThisYear(currentDate)}
          >
            Today
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

CalendarFilters.propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

CalendarFilters.defaultProps = {
  date: new Date(),
  onChange: () => {},
};

export default CalendarFilters;
