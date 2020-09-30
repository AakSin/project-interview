import React from "react";

import "./styles.css";
import Logo from "./Images/Logo.png";
import Background_Image from "./Images/Background_Image.png";
import {Link} from 'react-router-dom';

function Homepage() {
  function Sign_Up() {
    document.querySelector(".FORMS").style.display = "block";
  }

  return (

    <div className="main p-3 p-sm-5 d-flex align-items-center">
      <div className="row">
        <div className="col text-center text-md-left ">
          <div className="logo">
            <img src={Logo} alt="Logo" id="Logo_Image" />
            <span id="Title_Head">aD_hoc</span>
          </div>
          <header className="d-flex flex-column justify-content-center my-5">
            <h1 className="display-4">
              Ad-hoc coding interviews. <br />
              Now free for everyone
            </h1>
            <p className="lead">
              We’ve created the world’s first platform to create
              <strong> free</strong>, <strong>secure</strong>,{" "}
              <strong>automated</strong> and <strong>timed</strong> coding
              interviews to recruit the best talent with just a few clicks.
            </p>

            <div className="text-center">
              <button className="btn btn-outline-primary m-2" style={{width:'40%'}} onClick={Sign_Up}>
                <i className="fas fa-building mx-2"></i>
                Create Interview
              </button>
              
              <Link to="/code">
              <button className="btn btn-outline-primary m-2" style={{width:'40%'}}>
                <i className="fas fa-user-tie mx-2"></i>
                Take Interview
              </button>
              </Link>
              
            </div>
          </header>
        </div>
        <div className="d-none col d-md-flex justify-content-center">
          <img
            className="img-fluid"
            src={Background_Image}
            alt="Programming"
          />
        </div>
      </div>
    </div>
    
  );
}

export default Homepage;
