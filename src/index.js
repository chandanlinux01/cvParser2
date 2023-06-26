import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import AdminLayout from "layouts/Admin.js";
import Home from "Home";
import SignIn from "views/SignIn";
import SignUp from "views/SignUp";
import ProtectedRout from "components/Navbars/ProtectedRout";
import ForgotPassword from "views/ForgotPassword";
import ResetPassword from "views/ResetPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Switch>
      <Route exact path="/" render={(props) => <Home/>} />
      <Route path="/signin" render={(props) => <SignIn />} />
      <Route path="/signup" render={(props) => <SignUp />} />
      <Route path="/forgot-password" render={(props) => <ForgotPassword />} />
      <Route path="/password-reset" render={(props) => <ResetPassword />} />
      <Route path="/admin" render={(props) => <ProtectedRout Component={AdminLayout }/> } />
    </Switch>
  </Router>

  );