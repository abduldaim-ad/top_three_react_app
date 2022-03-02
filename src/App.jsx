import React from 'react';
import Card from "./Cards";
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

const App = ()=>(
  <>
    <h1 className='main_heading'>Top 3 Programming Languages</h1>
    {Sdata.map((val, index) =>{
      return(
        <Card 
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        plname={val.plname}
        link={val.link}
        webname={val.webname}
        />   
      ); 
    })}
  </>
);

export default App;