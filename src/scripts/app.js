import DateHandler from "./date-handler.js";
import WeatherHandler from "./weather-handler.js";

// Test
const response = await WeatherHandler.query({
    location: 'New Jersey',
    fromDate: DateHandler.format('07-15-2025'),
    toDate: DateHandler.format('07-20-2025')
});

console.log(response.data);
console.log(response.status);
// Test