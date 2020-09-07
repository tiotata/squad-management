import React from 'react';
import { Link } from 'react-router-dom';

import ComponentTitle from './ComponentTitle.jsx'
import TeamInformation from './TeamInformation.jsx'
import ConfigureSquads from './ConfigureSquads.jsx'


class AddEditComponent extends React.Component {

  constructor(props, refs) {
    super(props);
    if (props.teamData)
      this.teamData = props.teamData;

    if(!this.teamData.formation) {
      this.teamData.formation = [3,4,4];
    }

    this.teamInformation = React.createRef();
    this.squadConfig = React.createRef();
  }

  saveTeam() {
    if (this.teamInformation.current.validate() != true ||
      this.squadConfig.current.validate() != true) {
      window.alert("some fields are not valid");
    } else {
      let teamInfo = this.teamInformation.current.getInformation();
      teamInfo.squad = this.squadConfig.current.getSquadConfig();
      let savedTeams = JSON.parse(localStorage.getItem("savedTeams"));
      let savedTeamId = savedTeams.findIndex(t => parseInt(t.id) === parseInt(this.teamData.id));
      if (savedTeamId > -1 ) {
        teamInfo.id = savedTeams[savedTeamId].id;
        savedTeams[savedTeamId] = teamInfo;
      } else {
        let lastTeamIndex = localStorage.getItem("lastTeamIndex");
        teamInfo.id = lastTeamIndex + 1;
        savedTeams.push(teamInfo);
        localStorage.setItem("lastTeamIndex", teamInfo.id);
      }
      localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
    }
  }

  render() {
    return (
      <div>
        <ComponentTitle title={"Add/Edit Team"}></ComponentTitle>
        <TeamInformation ref={this.teamInformation} teamData={this.teamData} ></TeamInformation>
        <ConfigureSquads ref={this.squadConfig} formation={this.teamData.formation} squad={this.teamData.squad}></ConfigureSquads>
        <Link onClick={this.saveTeam.bind(this)} to={{
          pathname: '/',
        }} > save </Link>
      </div>
    );
  }
}

export default AddEditComponent;