import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage.js';
import FORM from './FORM.js';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router ,  Route , Switch } from 'react-router-dom';
 
ReactDOM.render(
<Router>
  <div> 
  <Route path = "/" exact component = {Homepage}/>
  <div style  = {{display:"none"}} className="FORMS">
    <FORM/>
  </div>
  </div>
  </Router>  
  ,
  document.getElementById('root')
)
