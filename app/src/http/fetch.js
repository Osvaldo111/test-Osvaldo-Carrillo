/**
 * Funtion to fetch
 * an API
 * @param {String} http
 * @param {Object} data
 */
const fetchAPI = http => {
  return fetch(http, {
    method: "GET"
  });
};

export default fetchAPI;
