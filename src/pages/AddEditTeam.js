import React from 'react';
 
import ComponentTitle from '.././components/ComponentTitle';
import TeamInformation from '../components/TeamInformation';
import ConfigureSquads from '../components/ConfigureSquads';

const AddEditTeam = (props) => {
  let teamData = {name:"test"};
   if (props.location.teamData)
      this.teamData = props.location.teamData;
    return (
     
       <div>
         <ComponentTitle title={"Add/Edit Team"}></ComponentTitle> 
         <TeamInformation teamData = {teamData} ></TeamInformation>
         <ConfigureSquads></ConfigureSquads>
      </div>
    );
}
 
export default AddEditTeam;