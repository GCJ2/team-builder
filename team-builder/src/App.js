import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewMemberForm from './components/NewMemberForm'
import TeamList from './components/TeamList'
import teamData from './TeamMembers.js'
import TeamCard from './components/TeamCard';
import { Route, Link } from 'react-router-dom'

import './App.css';


function App() {

  const [people, setPeople] = useState([
    {id: 0, name: "Greg", email: "greg@gmail.com", role: "React"},
    {id: 2, name: "Rick", email: "rick@gmail.com", role: "Actor"}
  ]);

  const addPerson = person => {
    setPeople([...people, {...person, id:Date.now()}]);
  }

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>
      <Route exact path="/" render={props => people.map(person => <TeamCard person={person} />)} />
      <Route path="/add" render={props => <NewMemberForm {...props}
        submitPerson={addPerson}
      />} />
      <Route path="/edit/:id"
        render={props => {
        console.log(props);
          return <NewMemberForm {...props} />;
       }}/>
    </div>
  );
}

export default App;
