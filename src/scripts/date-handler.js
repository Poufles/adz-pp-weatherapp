import { format, isValid } from 'date-fns';

// TIME FORMAT MUST BE: yyyy-MM-dd
const DateHandler = function() {
    return {
        /**
         * Correctly formats the date string.
         * @param {Date} date Date to be formatted.
         */
        format: (date) => {
            return format(date, 'yyyy-MM-dd');
        },
        /**
         * Verifies if the given date is valid or not.
         * @param {string} date - Date string.
         * @returns Boolean value.
         */
        isValid: (date) => {
            return isValid(date);
        }
    };
}();

export default DateHandler;