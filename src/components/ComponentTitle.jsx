import React from 'react';
import { Link } from 'react-router-dom';


class AppHeader extends React.Component {
  render() {
    let button = "";

    if (this.props.targetPage) {
      button = <Link  to={{
        pathname: this.props.targetPage
      }} ><div className="addTeamButton" ><span> + </span></div></Link>
    }

    return (
      <div className="titleContainer">
        <h1 className="title">{this.props.title}</h1>
        {button}
      </div>
    );
  }
}

export default AppHeader;