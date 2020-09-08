import React from 'react';
import { Link } from 'react-router-dom';

class ListButtons extends React.Component {
  render() {
    let teamId = this.props.teamId;

    return (
      <div className="listButtons" >
        <div className="removeButton"></div>
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