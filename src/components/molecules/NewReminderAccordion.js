import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const NewReminderAccordion = ({ expanded, onChange, children }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <AddCircleOutlineRoundedIcon fontSize="large" color="success" />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Add new reminder
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

NewReminderAccordion.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

NewReminderAccordion.defaultProps = {
  onChange: () => {},
};

export default NewReminderAccordion;
