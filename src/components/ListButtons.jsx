import React from 'react';
import { Link } from 'react-router-dom';

class ListButtons extends React.Component {

  removeTeam() {
    const teamIdToBeRemoved = this.props.teamId;
    const savedTeams = JSON.parse(localStorage.getItem("savedTeams"));
    const removeIndex = savedTeams.map(team => parseInt(team.id)).indexOf(parseInt(teamIdToBeRemoved));
    savedTeams.splice(removeIndex, 1);
    localStorage.setItem("savedTeams",JSON.stringify(savedTeams));
    this.props.myCallBack();
  }

  render() {
    let teamId = this.props.teamId;

    return (
      <div className="listButtons" >

        <Link onClick={() => this.removeTeam()}  to={{
          pathname: "/"
        }} > <div className="removeButton" > </div> </Link>

        <div className="shareButton" ></div>

        <Link to={{
          pathname: "/AddEditTeams",
          teamId: teamId
        }} > <div className="editButton"> </div> </Link>

      </div>
    );
  }
}

export default ListButtons;