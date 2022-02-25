import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';
import Sdata from './Sdata';

// function ncard(val){
//   return(
//     <Card 
//     imgsrc={val.imgsrc}
//     title={val.title}
//     plname={val.plname}
//     link={val.link}
//     webname={val.webname}
//     />    
//   );
// }

ReactDOM.render(
  <>
    <h1 className='main_heading'>Top 3 Programming Languages</h1>
    {Sdata.map((val, index) =>{
      return(
        <Card 
        imgsrc={val.imgsrc}
        title={val.title}
        plname={val.plname}
        link={val.link}
        webname={val.webname}
        />   
      ); 
    })}
  </>
  ,
  document.getElementById('root')
);