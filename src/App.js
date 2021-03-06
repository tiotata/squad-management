import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppHeader from './components/AppHeader.jsx'
import Home from './pages/Home';
import AddEditTeams from './pages/AddEditTeam';
import './App.scss';

function App() {
  let teams = [];
  localStorage.setItem("savedTeams", JSON.stringify(teams) );
  localStorage.setItem("savedTeams", '[{"name":"Peaky Blinders","description":"description, description","url":"pk.com","type":"","tags":"","squad":[{"id":11,"firstname":"João Paulo","lastname":"Mior","nationality":"Brazil","age":28,"initials":"JM","slot":"player9"},{"id":140,"firstname":"João Pedro","lastname":"Junqueira de Jesus","nationality":"Brazil","age":18,"initials":"JJ","slot":"player8"},{"id":403,"firstname":"João Paulo","lastname":"da Silva Alves","nationality":"Brazil","age":29,"initials":"JD","slot":"player4"},{"id":551,"firstname":"João Pedro","lastname":"Maturano dos Santos","nationality":"Brazil","age":23,"initials":"JM","slot":"player10"},{"id":632,"firstname":"João Paulo","lastname":"Silva Martins","nationality":"Brazil","age":24,"initials":"JS","slot":"player2"},{"id":472,"firstname":"João Vitor","lastname":"Lima Gomes","nationality":"Brazil","age":31,"initials":"JL","slot":"player6"},{"id":400,"firstname":"João Lucas","lastname":"de Almeida Carvalho","nationality":"Brazil","age":21,"initials":"JD","slot":"player7"},{"id":1785,"firstname":"João Ricardo","lastname":"Pereira Queirós","nationality":"Portugal","age":21,"initials":"JP","slot":"player1"},{"id":2141,"firstname":"João Mário","lastname":"Naval da Costa Eduardo","nationality":"Portugal","age":26,"initials":"JN","slot":"player0"},{"id":2196,"firstname":"João Félix","lastname":"Sequeira","nationality":"Portugal","age":20,"initials":"JS","slot":"player5"},{"id":2772,"firstname":"Jordan","lastname":"Ikoko","nationality":"Congo DR","age":25,"initials":"JI","slot":"player3"}],"id":"01"},{"name":"Valerians","description":"valerians go!","url":"google.com","type":"","tags":"","squad":[{"id":1592,"firstname":"Mike","lastname":"te Wierik","nationality":"Netherlands","age":27,"initials":"MT","slot":"player9"},{"id":3079,"firstname":"Mike","lastname":"Cestor","nationality":"Congo DR","age":27,"initials":"MC","slot":"player10"},{"id":288,"firstname":"Ronaldo","lastname":"da Silva Souza","nationality":"Brazil","age":23,"initials":"RD","slot":"player6"},{"id":2189,"firstname":"Cristiano Ronaldo","lastname":"dos Santos Aveiro","nationality":"Portugal","age":34,"initials":"CD","slot":"player7"},{"id":11,"firstname":"João Paulo","lastname":"Mior","nationality":"Brazil","age":28,"initials":"JM","slot":"player8"},{"id":140,"firstname":"João Pedro","lastname":"Junqueira de Jesus","nationality":"Brazil","age":18,"initials":"JJ","slot":"player5"},{"id":400,"firstname":"João Lucas","lastname":"de Almeida Carvalho","nationality":"Brazil","age":21,"initials":"JD","slot":"player0"},{"id":403,"firstname":"João Paulo","lastname":"da Silva Alves","nationality":"Brazil","age":29,"initials":"JD","slot":"player1"},{"id":472,"firstname":"João Vitor","lastname":"Lima Gomes","nationality":"Brazil","age":31,"initials":"JL","slot":"player2"},{"id":551,"firstname":"João Pedro","lastname":"Maturano dos Santos","nationality":"Brazil","age":23,"initials":"JM","slot":"player4"},{"id":79,"firstname":"João Lucas","lastname":"Cardoso","nationality":"Brazil","age":28,"initials":"JC","slot":"player3"}],"id":"011"},{"name":"Joes","description":"JOhn team ","url":"johns.com.br","type":"","tags":"","squad":[{"id":79,"firstname":"João Lucas","lastname":"Cardoso","nationality":"Brazil","age":28,"initials":"JC","slot":"player1"},{"id":400,"firstname":"João Lucas","lastname":"de Almeida Carvalho","nationality":"Brazil","age":21,"initials":"JD","slot":"player6"},{"id":140,"firstname":"João Pedro","lastname":"Junqueira de Jesus","nationality":"Brazil","age":18,"initials":"JJ","slot":"player0"},{"id":472,"firstname":"João Vitor","lastname":"Lima Gomes","nationality":"Brazil","age":31,"initials":"JL","slot":"player5"},{"id":632,"firstname":"João Paulo","lastname":"Silva Martins","nationality":"Brazil","age":24,"initials":"JS","slot":"player7"},{"id":11,"firstname":"João Paulo","lastname":"Mior","nationality":"Brazil","age":28,"initials":"JM","slot":"player9"},{"id":1013,"firstname":"Kyle","lastname":"Walker-Peters","nationality":"England","age":22,"initials":"KW","slot":"player8"},{"id":1984,"firstname":"Peter","lastname":"Oladeji Olayinka","nationality":"Nigeria","age":24,"initials":"PO","slot":"player4"},{"id":3416,"firstname":"Armands","lastname":"Pētersons","nationality":"Latvia","age":29,"initials":"AP","slot":"player3"},{"id":3324,"firstname":"Pætur Joensson","lastname":"Petersen","nationality":"Faroe Islands","age":21,"initials":"PP","slot":"player2"},{"id":1691,"firstname":"Jordens","lastname":"Peters","nationality":"Netherlands","age":32,"initials":"JP","slot":"player10"}],"id":"0111"}]'); 
  localStorage.setItem("lastTeamIndex", 3);
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
