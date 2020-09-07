import React from 'react';

import AddEditComponent from '../components/AddEditComponent';



const AddEditTeam = (props) => {

  let teamData = {};
  if (props.location.teamId) {
    teamData = JSON.parse(localStorage.getItem("savedTeams")).find(t => parseInt(t.id) === parseInt(props.location.teamId));
  }
    
    return (
     
       <div className="createEditTeam">
         <AddEditComponent teamData = {teamData}></AddEditComponent>
      </div>
    );
}


 
export default AddEditTeam;