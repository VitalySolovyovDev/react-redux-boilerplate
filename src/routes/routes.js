import React from "react";
import C0 from "../containers/Home";
import C1 from "../components/C1";
import C10 from "../components/C10";
import C11 from "../components/C11";

export default [
  {
    path: "/",
    exact: true,
    component: C0
  },
  {
    path: "/1",
    exact: true,
    component: C1
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