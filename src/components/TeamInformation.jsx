import React from 'react';

import ComponentSubTitle from './ComponentSubTitle';

class TeamInformation extends React.Component {
  constructor(props) {
    super(props);

    this.name = props.teamData.name;
    this.description = props.teamData.description;
    this.url = props.teamData.url;
    this.type = props.teamData.type.toString();
    this.tags = props.teamData.tags.toString();
  }

  validate() {
    console.log(this)
    return true;
  }

  render() {
    return (
      <>
        <ComponentSubTitle title="Team Information"></ComponentSubTitle>
        <div className="teamInformation">
          <div>
            <span>Team Name</span>
            <input type="text" placeholder={this.name} onChange={event => this.name = event.target.value}></input>
            <span>Description</span>
            <textarea type="text" rows="5" placeholder={this.description} onChange={event => this.description = event.target.value} ></textarea>
          </div>
          <div>
            <span>Team Website</span>
            <input type="text" placeholder={this.url} onChange={event => this.url = event.target.value} ></input>
            <span>Team Type</span>
            <input type="text" placeholder={this.type}></input>
            <span>Tags</span>
            <div id="tagSelector" height="3em">{this.tags.toString()}</div>
          </div>
        </div>
      </>
    );
  }
}

export default TeamInformation;