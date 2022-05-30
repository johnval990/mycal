import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReminderWeather from "./ReminderWeather";

const ReminderAccordionItem = ({ reminder, expanded, onChange, children }) => {
  return (
    <Accordion expanded={expanded} onChange={onChange(reminder.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Typography sx={{ flexShrink: 0 }}>
              {reminder.time} - {reminder.city}
              <ReminderWeather weather={reminder.weather} />
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {reminder.description}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 2, backgroundColor: "#f4f2f2" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

ReminderAccordionItem.propTypes = {
  reminder: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

ReminderAccordionItem.defaultProps = {
  onChange: () => {},
};

export default ReminderAccordionItem;
