import React from "react";
import { connect } from "react-redux";
import CountriesList from "../components/CountriesList";
import { GET_COUNTRIES_SUCCESS } from "../constants/actions";

class Home extends React.Component {
  render() {
    const { countries, getCountries } = this.props;
    return (
      <>
        <h1>HOME Page</h1>
        <button type="button" onClick={getCountries}>Getting countries</button>
        {countries.length > 0 && <CountriesList countries={countries}/>}
      </>
    );
  };
}

const mapStateToProps = store => {
  return {
    countries: store.countries
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
