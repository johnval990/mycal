import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CalendarHeader = ({ text, shortText }) => {
  return (
    <Box className="calendar--item calendar--item--header">
      <Typography
        sx={{
          color: "white",
          fontWeight: "700",
          display: { xs: "none", md: "block" },
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontWeight: "700",
          display: { xs: "block", md: "none" },
        }}
      >
        {shortText}
      </Typography>
    </Box>
  );
};

CalendarHeader.propTypes = {
  text: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
};

export default CalendarHeader;
