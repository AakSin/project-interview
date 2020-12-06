import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/python/python");
require("codemirror/mode/clike/clike");

export default function CodeBox() {
  const [title, setTitle] = useState("Select a language");
  const [code,setCode]=useState("Enter your solution");
  let lang;
  switch (title) {
    case "C++":
      lang = "text/x-c++src";
      break;
    case "Python 3":
      lang = "python";
      break;
    case "Java":
      lang = "text/x-java";
      break;
  }
  return (
    <div className="py-2 px-1" style={{ backgroundColor: "white" }}>
      <div
        className="d-flex justify-content-around pb-1"
        style={{ borderBottom: "1px solid #bfbbbb" }}
      >
        <DropdownButton
          id="dropdown-basic-button"
          title={title}
          style={{ display: "inline-block" }}
        >
          <Dropdown.Item
            onSelect={() => {
              setTitle("Python 3");
            }}
          >
            Python 3
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => {
              setTitle("C++");
            }}
          >
            C++
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => {
              setTitle("Java");
            }}
          >
            Java
          </Dropdown.Item>
        </DropdownButton>
        <Form.Check
          type="checkbox"
          label="Autocomplete"
          style={{ display: "inline-block" }}
          className="m-2"
        />
      </div>
      <CodeMirror
        value={code}
        options={{
          mode: lang,
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </div>
  );
}
