import React from 'react';

import ComponentSubTitle from './ComponentSubTitle';

class TeamInformation extends React.Component {
  constructor(props){
    super(props);
    this.name = props.teamData.name;
  }
  
  render() {
    return (
      <>
        <ComponentSubTitle title="Team Information"></ComponentSubTitle>
        <div>
          <span>Team Name</span>
          <input type="text" placeholder={this.name}></input>  
          <span>Description</span>
          <textarea type="text" rows="5" placeholder={this.name}></textarea>  
        </div>
        <div>
          <span>Team Website</span>
          <input type="text" placeholder={this.name}></input>  
          <span>Team Type</span>
          <input type="text" placeholder={this.name}></input>  
          <span>Tags</span>
          <div  id="tagSelector">{this.name}</div>  
        </div>
      </>
    );
  }
}

export default TeamInformation;