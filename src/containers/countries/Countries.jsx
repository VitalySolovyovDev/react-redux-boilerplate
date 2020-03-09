import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import CountriesList from "../../components/CountriesList";
import { GET_COUNTRIES_SUCCESS } from "../../constants/actions";

class Countries extends React.Component {
  render() {
    const { countries, getCountries } = this.props;
    return (
      <>
        <h2>Click the button below to get countries list</h2>
        <button type="button" onClick={getCountries}>Getting countries</button>
        {countries.length > 0 && <CountriesList countries={countries}/>}
      </>
    );
  };
}

const countriesSelector = createSelector(
  state => state.countries,
  countries => countries
);

const mapStateToProps = store => {
  return {
    countries: countriesSelector(store).toJS()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountries: () => {
      const fetchCountriesFromAPI = () => fetch("https://restcountries.eu/rest/v2/all");

      const asyncGetCountries = () => {
        return dispatch =>
          fetchCountriesFromAPI()
            .then(response => response.json())
            .then(result => dispatch({ type: GET_COUNTRIES_SUCCESS, payload: result }))
            .catch(error => console.error(`Something was wrong while requesting countries: ${error}`));
      };

      dispatch(asyncGetCountries());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
