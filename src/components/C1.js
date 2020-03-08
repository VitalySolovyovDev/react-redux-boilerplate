import React from "react";
import { useRouteMatch } from "react-router-dom";

export default class C1 extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>C1 component</div>
    );
  };
};
