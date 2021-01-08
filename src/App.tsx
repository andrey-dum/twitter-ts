import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import {SignIn} from './pages/SignIn';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
        
    </div>
  );
}

export default App;
