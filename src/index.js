import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css'

ReactDOM.render(
  <>
    <h1>Top 3 Programming Languages</h1>
    <Card imgsrc="https://wallpapercave.com/dwp1x/wp2465923.jpg"
    title="Programming Series"
    plname="ReactJS"
    link="https://reactjs.org/"
    webname="React Website"
    />

    <Card imgsrc="https://4beginner.blob.core.windows.net/article/JavaScript-Logo_051220_105700023.png"
    title="Programming Series"
    plname="JavaScript"
    link="https://www.javascript.com/"
    webname="JavaScript Website"
    />

    <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/300px-Python-logo-notext.svg.png"
    title="Programming Series"
    plname="Python"
    link="https://www.python.org/"
    webname="Python Website"
    />
  </>
  ,
  document.getElementById('root')
);