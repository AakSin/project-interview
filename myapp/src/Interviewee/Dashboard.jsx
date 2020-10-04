import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./stylesheets/Dashboard.scss";
import QuestionBox from "./QuestionBox.jsx";

export default function Dashboard() {
  let range = (n) => [...Array(n).keys()];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [qnum, setQnum] = useState(range(4));
  return (
    <div>
      <Navbar></Navbar>
      <ul id="sidebar">
        <li
          onClick={() => handleOnClick(0)} // pass the index
          className={activeIndex === 0 ? "active" : ""}
        >
          All
        </li>
        {qnum.map((num) => {
          return (
            <li
              key={num + 1}
              onClick={() => handleOnClick(num + 1)} // pass the index
              className={activeIndex === num + 1 ? "active" : ""}
            >
              {num + 1}
            </li>
          );
        })}
      </ul>
      <div className="container">
          <QuestionBox qno="1" qname="Reverse a string" testsPassed="1/4"></QuestionBox>
      </div>
    </div>
  );
}
