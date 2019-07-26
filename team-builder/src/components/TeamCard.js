import React from "react";
import { Link } from 'react-router-dom'

const TeamCard = (props) => {

  const { person } = props;


  return (
    <div className = "team-card">
      <p>Name: {person.name}</p>
      <p>Email: {person.email}</p>
      <p>Role: {person.role}</p>
      <Link to={`/edit/${person.id}`}>Edit</Link>
    </div>
  );
};

export default TeamCard;
