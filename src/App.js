import React, { useState } from "react";
import "./App.css";

const ACTION = [
  "driving",
  "executing",
  "passionate about",
  "humanizing",
  "provoking new",
  "creating",
];
const SUBJECT = ["executive", "leader", "entrepreneur", "innovator"];
const ADJECTIVE = [
  "compassionate",
  "empathetic",
  "thoughtful",
  "meaningful",
  "value-based",
  "global",
  "caring",
  "technical",
  "revolutionary",
  "impactful",
  "industry leading",
];
const SUBJECT_INDUSTRY = ["products", "ideas", "technologies"];

function getRandomEntry(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generate(workArea) {
  const adjective = getRandomEntry(ADJECTIVE);
  const subject = getRandomEntry(SUBJECT);
  const action = getRandomEntry(ACTION);

  const product_subject = getRandomEntry(SUBJECT_INDUSTRY);
  const product_adjective = getRandomEntry(ADJECTIVE);

  return `${adjective} ${subject} ${action} ${product_adjective} ${workArea} ${product_subject}`;
}

function App() {
  const [industry, setIndustry] = useState("social media");
  const [bio, setBio] = useState("");
  return (
    <div className="App">
      <div>
        <div>
          <h3>Work Industry</h3>
          <input
            value={industry}
            onChange={(e) => {
              const value = e.target.value;
              console.log(e, e.target.value);
              setIndustry(value);
            }}
          ></input>
        </div>
      </div>
      <div>
        <h3>Generated BIO:</h3>
        <textarea
          readOnly
          value={bio}
          style={{ width: "400px", height: "100px" }}
        />
      </div>

      <button
        onClick={() => {
          setBio(generate(industry));
        }}
      >
        <h2>Generate</h2>
      </button>
    </div>
  );
}

export default App;
