import React from 'react';
import { NavLink } from 'react-router-dom';


class AppHeader extends React.Component {
  render() {
    let button = "";

    if (this.props.targetPage) {
      button = <NavLink to={this.props.targetPage}>+</NavLink>
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