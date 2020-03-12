import React from 'react';
import Navigation from './Components/Navigation';
import Texts from './Components/Page/Texts';
import Home from './Components/Page/Home';

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/texts" component={Texts}/>
          </div>
        </Navigation>
      </Router>
    </React.Fragment>
  );
}

export default App;
