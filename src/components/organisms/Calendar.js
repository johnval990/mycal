import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { getMonthCalendar } from "../../utils/date";
import CalendarHeader from "../molecules/CalendarHeader";
import DayBox from "../molecules/DayBox";
import DayDialog from "./DayDialog";

const Calendar = ({ date }) => {
  const [day, setDay] = useState(new Date());
  const [open, setOpen] = useState(false);
  const monthCalendar = getMonthCalendar(date);

  const handleDayClick = (dayDate) => {
    setDay(dayDate);
    setOpen(true);
  };

  return (
    <>
      <Box className="calendar">
        <CalendarHeader text="Sunday" shortText="S" />
        <CalendarHeader text="Monday" shortText="M" />
        <CalendarHeader text="Tuesday" shortText="T" />
        <CalendarHeader text="Wednesday" shortText="W" />
        <CalendarHeader text="Thursday" shortText="T" />
        <CalendarHeader text="Friday" shortText="F" />
        <CalendarHeader text="Saturday" shortText="S" />

        {monthCalendar.map((item) => (
          <DayBox key={item.id} {...item} onClick={handleDayClick} />
        ))}
      </Box>

      <DayDialog date={day} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
