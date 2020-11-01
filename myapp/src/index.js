import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage.js";
import FORM from "./FORM.js";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch,withRouter  } from "react-router-dom";
import Code from "./Interviewee/Code.jsx";
import Dashboard from "./Interviewee/Dashboard.jsx";

ReactDOM.render(

      <Router>
        <div>
      <Switch>
        <Route path="/code" exact component={withRouter(Code)} />
        <Route path="/:interview/:employee" exact component={withRouter(Dashboard)} />
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
