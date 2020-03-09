import React from "react";
import PropTypes from "prop-types";

const CountriesList = ({ countries }) => (
  <ul>
    {countries.map(
      country => <li key={country.name}>{country.name}</li>
    )}
  </ul>
);

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired
};

export default CountriesList;
