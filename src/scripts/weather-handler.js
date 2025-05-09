/**
 * DOCUMENTATION LINK:
 * https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
 */

const WeatherHandler = function () {
    const API_KEY = process.env.API_KEY;

    return {
        /**
        * Creates a weather query to fetch data.
        * @param {{
        * location: string,
        * fromDate: Date,
        * toDate: Date
        * }} options location refers to the target place || (optional) fromDate refers to the starting date to retrieve || (optional) toDate refers to the ending date to retrieve; inclusive
        * @returns {{
        * status: Number,
        * data: object
        * }} An object containing the status of the query and the data.
        */
        query: async ({ location, fromDate, toDate } = {}) => {
            const queryResponse = {
                status: undefined,
                data: undefined
            };

            let url = `
               https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}&include=days,hours,alerts,events,fcst,stats&locationNames
           `;
           
           if (fromDate) InsertDateToUrl(url, fromDate);
           if (fromDate) InsertDateToUrl(url, toDate);

            const response = await fetch(url, { mode: 'cors' });

            if (response.status === 200) {
                queryResponse.status = response.status;
                queryResponse.data = await response.json();
            }
            
            else if (response.status === 400) queryResponse.status = response.status;
            else if (response.status === 429) queryResponse.status = response.status;
            else if (response.status === 500) queryResponse.status = response.status;

            return queryResponse;
        }
    };
}();

/**
 * Inserts date to the current url
 * @param {string} url 
 * @param {string} date 
 */
function InsertDateToUrl(url, date) {
    const insertIndex = url.indexOf('?');

    url = `${url.slice(0, insertIndex)}/${date}${url.slice(insertIndex)}`;
}

export default WeatherHandler;