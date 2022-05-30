import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import CloseIcon from "@mui/icons-material/Close";
import ReminderForm from "./ReminderForm";
import NewReminderAccordion from "../molecules/NewReminderAccordion";
import ReminderList from "./ReminderList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DayDialog = ({ date, open, onClose }) => {
  const [expanded, setExpanded] = React.useState(false);
  const title = format(date, "EEEE, MMM dd, yyyy");

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <NewReminderAccordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <ReminderForm
          date={date}
          isNew={true}
          onSubmit={() => setExpanded(false)}
        />
      </NewReminderAccordion>

      <ReminderList date={date} />
    </Dialog>
  );
};

DayDialog.propTypes = {
  date: PropTypes.instanceOf(Date),
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

DayDialog.defaultProps = {
  open: false,
  onClose: () => {},
};

export default DayDialog;
