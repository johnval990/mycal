import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectRemindersByDate } from "../../store/features/calendar";
import ReminderAccordionItem from "../molecules/ReminderAccordionItem";
import ReminderForm from "./ReminderForm";

const ReminderList = ({ date }) => {
  const reminders = useSelector(selectRemindersByDate(date));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {reminders.map((item) => (
        <ReminderAccordionItem
          key={item.id}
          reminder={item}
          expanded={expanded === item.id}
          onChange={handleChange}
        >
          <ReminderForm
            data={item}
            date={date}
            isNew={false}
            onSubmit={() => setExpanded(false)}
          />
        </ReminderAccordionItem>
      ))}
    </>
  );
};

ReminderList.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ReminderList;
