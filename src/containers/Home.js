import React from "react";
import { connect } from "react-redux";
import { GET_COUNTRIES } from "../constants/actions";
// TODO refactoring
class Home extends React.Component {
  render(){
    const { countries, getCountries } = this.props;
    return (
      <>
        <h1>HOME Page</h1>
        <button type="button" onClick={getCountries}>Getting countries</button>
        {countries.length > 0
          && (
            <ul>
              {countries.map(
                country => <li key={country.name}>{country.name}</li>
              )}
            </ul>
        )}
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
    getCountries: () => dispatch({ type: GET_COUNTRIES })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
