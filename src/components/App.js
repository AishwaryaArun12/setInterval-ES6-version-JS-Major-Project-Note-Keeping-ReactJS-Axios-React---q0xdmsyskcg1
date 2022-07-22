import React, { Component, useState } from "react";
import "../styles/App.css";
let arr = ["sibblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
function App() {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [index, setIndex] = useState("No Relationship");
  function handleChange1(e) {
    setFname(e.target.value);
  }
  function handleChange2(e) {
    setSname(e.target.value);
  }
  function outputlength(f, s) {
    let fmap = {};
    let smap = {};
    for (let i = 0; i < f.length; i++) {
      if (!fmap[f[i]]) fmap[f[i]] = 0;
      fmap[f[i]] += 1;
    }
    for (let i = 0; i < s.length; i++) {
      if (!smap[s[i]]) smap[s[i]] = 0;
      smap[s[i]] += 1;
    }
    console.log(fmap, smap);
    for (let key1 in fmap) {
      for (let key2 in smap) {
        if (fmap[key1] !== 0 && smap[key1] !== 0)
          if (smap[key1]) {
            fmap[key1]--;
            smap[key1]--;
          }
      }
    }
    let tottal = 0;
    for (let key in fmap) {
      tottal += fmap[key];
    }
    for (let key in smap) {
      tottal += smap[key];
    }
    console.log(tottal);
    if (tottal !== 0) {
      return tottal % 6;
    } else {
      setIndex("No Relationship");
    }
  }
  function clear() {
    setFname("");
    setSname("");
    setIndex((index) => "No Relationship");
  }
  function calculate() {
    let mergelength = outputlength(fname.toLowerCase(), sname.toLowerCase());
    console.log(mergelength);
    setIndex(arr[mergelength]);
  }

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <h3 datatest-id="answer">{index}</h3>
      <br />
      <label htmlFor="fname">
        First Name
        <input
          id="fname"
          type="text"
          value={fname}
          data-testid="input1"
          onChange={handleChange1}
        />
      </label>
      <br />
      <label htmlFor="sname">
        Last Name
        <input
          id="sname"
          type="text"
          value={sname}
          data-testid="input2"
          onChange={handleChange2}
        />
      </label>
      <br />
      <div id="button">
        <button data-testid="calculate_relationship" onClick={calculate}>
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
