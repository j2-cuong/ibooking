import { lazy } from "react";

const PagesRoutes = [
  {
    path: "/pages/chuyen-khoa",
    component: lazy(() => import("../../view/pages/chuyen-khoa")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/bac-sy",
    component: lazy(() => import("../../view/pages/bac-sy")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/cam-nang",
    component: lazy(() => import("../../view/pages/cam-nang")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-page",
    component: lazy(() => import("../../view/pages/error")),
    layout: "FullLayout",
  },
];

export default PagesRoutes;