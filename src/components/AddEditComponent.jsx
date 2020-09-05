import React from 'react';
import ComponentTitle from './ComponentTitle.jsx'
import TeamInformation from './TeamInformation.jsx'
import ConfigureSquads from './ConfigureSquads.jsx'

class AddEditComponent extends React.Component {

  constructor(props, refs) {
    super(props);
    this.state = {
      teamsObject: [{ name: "FT", description: "Fiver5 Team" }, { name: "TF", description: "Team Fantasy" }, { name: "Zerks", description: "All Zerks" }]
    }
    this.teamData = { name: "test", description: "text description", url: "www.team.com", type: true, tags: ["best", "crazy"], formation: "3-4-3", squad: ["James", "Alex", "Harry"] };
    if (props.teamData)
      this.teamData = props.teamData;

    this.teamInformation = React.createRef();
    this.squadConfig = React.createRef();
  }


  saveTeam() {
    if (this.teamInformation.current.validate() != true) {
      window.alert("some fields are not valid");
    } else {

    }

  }

  render() {
    return (
      <div>
        <ComponentTitle title={"Add/Edit Team"}></ComponentTitle>
        <TeamInformation ref={this.teamInformation} teamData={this.teamData} ></TeamInformation>
        <ConfigureSquads ref={this.squadConfig} formation={this.teamData.formation} squad={this.teamData.squad}></ConfigureSquads>
        <span onClick={this.saveTeam.bind(this)}>save</span>
      </div>
    );
  }
}

export default AddEditComponent;