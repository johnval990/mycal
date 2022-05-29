import { useState } from "react";
import CalendarGrid from "../components/organisms/Calendar";
import CalendarFilters from "../components/organisms/CalendarFilters";

function Calendar() {
  const [date, setDate] = useState(() => new Date());

  return (
    <>
      <CalendarFilters date={date} onChange={setDate} />
      <CalendarGrid date={date} />
    </>
  );
}

export default Calendar;
