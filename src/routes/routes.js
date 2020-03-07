import React from "react";
import C0 from "../components/C0";
import C1 from "../components/C1";
import C10 from "../components/C10";
import C11 from "../components/C11";

export default [
  {
    path: "*",
    component: () => <div>Default</div>
  },
  {
    path: "/",
    exact: true,
    component: C0
  },
  {
    path: "/1",
    component: C1,
    routes: [
      {
        path: "/1/0",
        component: C10
      },
      {
        path: "/1/1",
        component: C11
      }
    ]
  }
];