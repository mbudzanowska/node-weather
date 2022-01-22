const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  geocode(address, (error, { longitude, latitude, location }) => {
    if (error) {
      console.log("Geocode Error:", error);
      return;
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log("Forecast Error:", error);
        return;
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
