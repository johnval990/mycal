const apiKey = process.env.REACT_APP_VISUAL_CROSSING_KEY;
const apiUrl = process.env.REACT_APP_VISUAL_CROSSING_URL;

export async function getCityWeatherByDate(city, date) {
  const request = await fetch(
    `${apiUrl}/timeline/${city}/${date}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`,
    {
      method: "GET",
    }
  );
  return request.json();
}
