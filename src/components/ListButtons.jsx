import React from 'react';

class ListButtons extends React.Component {
  render() {
    let teamName = this.props.name;

    return (
      <>
        <img id="remove"/>
        <img id="shareTeam"/>
        <img id="editTeam"/>
      </>
    );
  }
}

export default ListButtons;