import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppHeader from './components/AppHeader.jsx'
import Home from './pages/Home';
import AddEditTeams from './pages/AddEditTeam';
import './App.scss';

function App() {
  let teams = [];
  localStorage.setItem("savedTeams", JSON.stringify(teams) );
  localStorage.setItem("lastTeamIndex", 0);
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/AddEditTeams" component={AddEditTeams} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
