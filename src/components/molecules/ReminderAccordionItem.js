import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deleteReminder } from "../../store/features/calendar";

const ReminderAccordionItem = ({ reminder, expanded, onChange, children }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteReminder(reminder.id));
  };

  return (
    <Accordion expanded={expanded} onChange={onChange(reminder.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {reminder.time} - {reminder.city}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {reminder.description}
        </Typography>

        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "end" }}>
          <IconButton aria-label="delete" size="small" onClick={handleDelete}>
            <DeleteIcon fontSize="small" />
          </IconButton>
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
