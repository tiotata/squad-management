import React from 'react';

import ComponentSubTitle from './ComponentSubTitle';

class TeamInformation extends React.Component {
  constructor(props) {
    super(props);

    this.name = "";
    this.description = "";
    this.url = "";
    this.type = "";
    this.tags = "";

    this.urlTest = /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/

    if (props.teamData.id) {

      this.name = props.teamData.name;
      this.description = props.teamData.description;
      this.url = props.teamData.url;
      this.type = props.teamData.type.toString();
      this.tags = props.teamData.tags.toString();
    }

  }

  removeInvalid(str){
    document.getElementById(str).classList.remove('invalidField');
  }

  validate() {
    let wrongFields = [];
    if (!this.urlTest.test(this.url)) {
      wrongFields.push("Team Website");
      document.getElementById("urlField").classList.add('invalidField');
    }
    if(this.name == "") {
      wrongFields.push("Team Name");
      document.getElementById("nameField").classList.add('invalidField');
    }

    if(wrongFields.length > 0) {
      window.alert("The following fields are empty or wrong: " + wrongFields);
      return false;
    }
    return true;
  }

  getInformation() {
    let info = {};
    info.name = this.name;
    info.description = this.description;
    info.url = this.url;
    info.type = this.type;
    info.tags = this.tags;
    return info;
  }

  render() {
    return (
      <>
        <ComponentSubTitle title="Team Information"></ComponentSubTitle>
        <div className="teamInformation">
          <div>
            <span>Team Name</span>
            <input type="text" id="nameField" placeholder={this.name} onChange={event =>{ this.name = event.target.value; this.removeInvalid('nameField');}}></input>
            <span>Description</span>
            <textarea type="text" rows="5" placeholder={this.description} onChange={event => this.description = event.target.value} ></textarea>
          </div>
          <div>
            <span>Team Website</span>
            <input type="text" id="urlField" placeholder={this.url} onChange={event => {this.url = event.target.value; this.removeInvalid('urlField');}} ></input>
            <span>Team Type</span>
            <input type="text" id="typeField"placeholder={this.type}></input>
            <span>Tags</span>
            <div id="tagSelector" height="3em">{this.tags.toString()}</div>
          </div>
        </div>
      </>
    );
  }
}

export default TeamInformation;