import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import { format } from "date-fns";
import { upsertReminder } from "../../store/features/calendar";

const schema = yup
  .object({
    id: yup.string(),
    date: yup.date().required(),
    time: yup
      .string()
      .matches(/^([01]\d|2[0-3]):?([0-5]\d)$/, "invalid time format")
      .required(),
    city: yup.string().max(30).required(),
    description: yup.string().max(30).required(),
  })
  .required();

const ReminderForm = ({ date, isNew, data, onSubmit }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset({
      date: format(date, "yyyy-MM-dd"),
      ...data,
    });
  }, [data, date, reset]);

  const submitCompleted = (data) => {
    onSubmit(data);
    dispatch(
      upsertReminder({ ...data, date: format(data.date, "yyyy-MM-dd") })
    );
    if (isNew) {
      reset({
        time: "00:00",
        city: "",
        description: "",
      });
    }
  };

  return (
    <Box
      component="form"
      sx={{ mb: 3 }}
      onSubmit={handleSubmit(submitCompleted)}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ readOnly: isNew, ...register("date") }}
            fullWidth
            error={!!errors.date}
            helperText={errors.date?.message}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Time"
            type="time"
            defaultValue="00:00"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ ...register("time") }}
            fullWidth
            error={!!errors.time}
            helperText={errors.time?.message}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="city"
            label="City"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ ...register("city"), maxLength: "30" }}
            fullWidth
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Description"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ ...register("description"), maxLength: "30" }}
            fullWidth
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button type="submit" size="large" variant="contained">
            {isNew ? "Save" : "Update"}
          </Button>
        </Grid>

        <TextField type={"hidden"} inputProps={{ ...register("id") }} />
      </Grid>
    </Box>
  );
};

ReminderForm.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isNew: PropTypes.bool,
  data: PropTypes.object,
  onSubmit: PropTypes.func,
};

ReminderForm.defaultProps = {
  isNew: true,
  onSubmit: () => {},
};

export default ReminderForm;
