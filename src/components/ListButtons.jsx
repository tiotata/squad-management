import React from 'react';
import { Link } from 'react-router-dom';

class ListButtons extends React.Component {
  render() {
    let teamId = this.props.teamId;

    return (
      <>
        <img id="remove" />
        <img id="shareTeam" />
        <Link to={{
          pathname: "/AddEditTeams",
          teamId: teamId
        }} > Edit </Link>
      </>
    );
  }
}

export default ListButtons;