
import ProfileGenerator from "views/ProfileGenerator.js";
import Dashboard from "views/Dashboard.js";
import Template from "views/Template.js";
import SavedResume from "views/SavedResume";


const dashboardRoutes = [
 
  {
    path: "/profile-generator",
    name: "Profile Generator",
    icon: "nc-icon nc-grid-45",
    component: ProfileGenerator,
    layout: "/admin"
  },
  // {
  //   path: "/dashboard",
  //   name: "Dash Board",
  //   icon: "nc-icon nc-credit-card",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  // {
  //   path: "/template",
  //   name: "Template",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Template,
  //   layout: "/admin"
  // },
  {
    path: "/savedresume",
    name: "Saved Resume",
    icon: "nc-icon nc-single-copy-04",
    component: SavedResume,
    layout: "/admin"
  }
];

export default dashboardRoutes;
