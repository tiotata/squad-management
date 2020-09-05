import React from 'react';
import { Link } from 'react-router-dom';


class AppHeader extends React.Component {
  render() {
    let button = "";

    if (this.props.targetPage) {
      button = <Link to={{
        pathname: this.props.targetPage,
        teamData: this.props.targetData
        
      }} > + </Link>
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