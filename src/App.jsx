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

const favPL = 'ReactJS';
const FavoritePL = () =>{
if(favPL==='ReactJS'){
    return (<h1>My favorite programming language is {favPL}</h1>);
}else if(favPL==='JavaScript'){
    return (<h1>My favorite programming language is {favPL}</h1>);
}else if(favPL==='Python'){
    return (<h1>My favorite programming language is {favPL}</h1>);
}
else{
    return (<h1>Invalid</h1>);
}
}

const App = ()=>(
  <>
    <h1 className='main_heading'>Top 3 Programming Languages</h1>
    <FavoritePL/>
    {/* {(favPL==='ReactJS') ? (<h1>My favorite programming language is {favPL}</h1>) : (<h1>Invalid</h1>)} */}
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