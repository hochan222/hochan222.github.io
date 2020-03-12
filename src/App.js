import React from 'react';
import Navigation from './Components/Navigation';
import Texts from './Components/Page/Texts';
import Table from './Components/Page/Table';
import Home from './Components/Page/Home';
import Avatar from './Components/Page/Avatar';
import Photos from './Components/Page/Photos';
import Footer from './Components/Page/Footer';
import TimeLine from './Components/Page/TimeLine';
import Transform from './Components/Page/Transform';

import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation>
          <div className="RouteOut">
            <Route exact path="/" component={Home}/>
            <Route exact path="/texts" component={Texts}/>
            <Route exact path="/table" component={Table}/>
            <Route exact path="/avatar" component={Avatar}/>
            <Route exact path="/photos" component={Photos}/>
            <Route exact path="/footer" component={Footer}/>
            <Route exact path="/timeline" component={TimeLine}/>
            <Route exact path="/transform" component={Transform}/>
          </div>
        </Navigation>
      </Router>
    </React.Fragment>
  );
}

export default App;
