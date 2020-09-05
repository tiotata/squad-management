import React from 'react';

import AddEditComponent from '../components/AddEditComponent';



const AddEditTeam = (props) => {

  let teamData = {name:"test", description:"text description", url:"www.team.com", type: true, tags: ["best","crazy"], formation:[5,2,2,1], squad:["James","Alex","Harry"] };
   if (props.location.teamData)
      teamData = props.location.teamData;
    return (
     
       <div className="createEditTeam">
         <AddEditComponent teamData = {teamData}></AddEditComponent>
      </div>
    );
}


 
export default AddEditTeam;