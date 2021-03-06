import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage.js";
import FORM from "./FORM.js";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch,withRouter  } from "react-router-dom";
import Dashboard from "./Interviewee/Dashboard.jsx";


ReactDOM.render(

      <Router>
        <div>
      <Switch>
        <Route path="/:interview/:employee" component={withRouter(Dashboard)} />
        <Route path="/" exact component={withRouter(Homepage)} />
      </Switch>
      <div style={{ display: "none" }} className="FORMS">
        <FORM />
      </div>
      </div>
      </Router>
 ,
  document.getElementById("root")
);
