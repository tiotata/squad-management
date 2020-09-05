import React from 'react';
import ComponentTitle from './ComponentTitle.jsx'
class AppHeader extends React.Component {
  render() {
    return (
      <div>
        <ComponentTitle title={"Top 5"} ></ComponentTitle>
      </div>
    );
  }
}

export default AppHeader;