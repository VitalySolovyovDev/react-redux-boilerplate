import {
  GET_COUNTRIES
} from "../constants/actions";

const fetchCountriesFromAPI = () => fetch("https://restcountries.eu/rest/v2/all");
const placeCountriesToStore = countries => {
  console.log("countries", countries);
};

function getCountries() {
  return dispatch =>
    fetchCountriesFromAPI().then(
      response => dispatch(placeCountriesToStore(response.text())),
      error => console.error(`Something was wrong while requesting countries: ${error}`),
    );
}

const initialState = [];
// TODO make fetch request
export default (store = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_COUNTRIES:
      const mockData = [{name: "Tver"}, {name: "Moscow"}];
      return mockData;
      break;
    default:
      return store;
  }
};