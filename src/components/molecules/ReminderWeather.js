import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Typography } from "@mui/material";

const icons = {
  snow: solid("snowflake"),
  rain: solid("cloud-rain"),
  fog: solid("smog"),
  wind: solid("wind"),
  cloudy: solid("cloud"),
  "partly-cloudy-day": solid("cloud-sun"),
  "partly-cloudy-night": solid("cloud-moon"),
  "clear-day": solid("sun"),
  "clear-night": solid("moon"),
};

const ReminderWeather = ({ weather }) => {
  if (!weather || !weather.data || weather.loading) {
    return <span></span>;
  }

  const [day] = weather.data.days;
  const icon = icons[day.icon] || icons.sun;
  return (
    <Typography variant="caption" sx={{ p: 1, color: "text.disabled" }}>
      (<FontAwesomeIcon icon={icon} /> {day.conditions})
    </Typography>
  );
};

ReminderWeather.propTypes = {
  weather: PropTypes.object,
};

export default ReminderWeather;
