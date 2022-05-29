import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { isToday } from "date-fns";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { countRemindersByDate } from "../../store/features/calendar";

const DayBox = ({ date, day, disabled, onClick }) => {
  const today = isToday(date);
  const reminders = useSelector(countRemindersByDate(date));

  return (
    <Box
      className={classNames("calendar--item calendar--item--day", {
        disabled: disabled,
        today: today,
      })}
      onClick={() => onClick(date)}
    >
      <Typography variant="body2" sx={{ ml: 1 }}>
        {day}
      </Typography>

      {reminders > 0 && (
        <Box
          fullWidth
          className="calendar--item--day--reminders"
          sx={{
            backgroundColor: "#00bcd4",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {reminders}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            {reminders} Reminder{reminders > 1 && "s"}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

DayBox.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  day: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

DayBox.defaultProps = {
  onClick: () => {},
};

export default DayBox;
