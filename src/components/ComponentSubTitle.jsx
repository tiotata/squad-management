import React from 'react';

class AppHeader extends React.Component {
  render() {
    let button = "";

    return (
      <>
        <h1 className="subTitle" style={{color: "gray", fontSize: "1.2em"}}>{this.props.title}</h1>
        {button}
      </>
    );
  }
}

export default AppHeader;