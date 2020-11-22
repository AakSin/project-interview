import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import "./stylesheets/Dashboard.scss";

import { } from "react-router-dom";
import {fetchQuestions} from "./models/interview.js";
import {  Route, Switch,useParams,useRouteMatch} from "react-router-dom";
import QuestionPage from "./QuestionPage.jsx";
import QuestionBox from "./QuestionBox.jsx";

export default function Dashboard() {
  // This set of data is relevant to Firestore
  let { path} = useRouteMatch();
  let {interview,employee} = useParams();
  const [questions, setQuestions] = useState({});

  // This set of data takes care of the sidebar and UI
  let range = (n) => [...Array(n).keys()];
  const [activeIndex, setActiveIndex] = useState(0);
  const [qnum, setQnum] = useState(0);

  useEffect(() =>{
    fetchQuestions(interview).then(response=>{
      setQuestions(response);
      setQnum(response.total);
    }).catch(err=>console.log(err));
  },[qnum])
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="d-flex">
      <ul id="sidebar">
        <li
          onClick={() => setActiveIndex(0)} // pass the index
          className={activeIndex === 0 ? "active" : ""}
        >
          <a href={`/${interview}/${employee}`}>
          All
          </a>
        </li>
        {range(qnum).map((num) => (
          
            <li
              key={num + 1}
              onClick={() =>setActiveIndex(num+1)} // pass the index
              className={activeIndex === num + 1 ? "active" : ""}
            >
              <a href={`/${interview}/${employee}/${num+1}`}>
              {num + 1}
              </a>
            </li>
        ))}
      </ul>
      <main>
            <Switch>
              <Route exact path={path}>
              {range(qnum).map((num) => (
                <QuestionBox qno={num+1} qname={questions[num+1]["title"]} testsPassed={questions[num+1]["testcases"]["total"]} qlink={`/${interview}/${employee}/${num+1}`} />
                ))}
              </Route>
              <Route exact path={`${path}/:number`}>
                <QuestionPage onUpdateIndex={(number)=>setActiveIndex(number)} questions={questions}></QuestionPage>
              </Route>
            </Switch>

      </main>
      </div>
    </div>
  );
}
