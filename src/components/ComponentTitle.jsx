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
      <>
        <h1>{this.props.title}</h1>
        {button}
      </>
    );
  }
}

export default AppHeader;