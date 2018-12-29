import React from 'react';
import { Route, Link } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import Single from './Single';
import Navigation from './Navigation';




const Main = () => {
  return (
    <div className="split-page">
     
      <div>
      <Navigation/>
      <h1><Link to="/">Chefspert</Link></h1>
          <Route exact path="/" component={PhotoGrid}/>     
          <Route path="/view/:postId" component={Single}/>
          
  

      </div>    
    </div>
  )
}

export default Main