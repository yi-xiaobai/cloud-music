import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../Application/Home";
import Recommend from "../Application/Recommend";
import Singers from "../Application/Singers";
import Rank from "../Application/Rank";

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/recommend"} />,
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singers",
        component: Singers,
      },
      {
        path: "/rank",
        component: Rank,
      },
    ],
  },
];
