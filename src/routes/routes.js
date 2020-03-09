import React from "react";
import Home from "../containers/home/Home";
import Countries from "../containers/countries/Countries";
import C10 from "../components/C10";
import C11 from "../components/C11";

export default [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home
  },
  {
    name: "Countries",
    path: "/countries",
    exact: true,
    component: Countries
  },
  {
    path: "/1/0",
    exact: true,
    component: C10
  },
  {
    path: "/1/1",
    exact: true,
    component: C11
  },
  {
    component: () => <div>No Match Route</div>
  }
];