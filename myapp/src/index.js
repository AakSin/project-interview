import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage.js';
import FORM from './FORM.js';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
 
ReactDOM.render(
  <div> 
  <Homepage/>
  <div style  = {{display:"none"}} className="FORMS">
    <FORM/>
  </div>
  </div>
  ,
  document.getElementById('root')
)
