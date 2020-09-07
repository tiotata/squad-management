import React from 'react';
import ComponentTitle from './ComponentTitle.jsx'
import ListButtons from './ListButtons.jsx'

class MyTeams extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
    this.teams = JSON.parse(localStorage.getItem("savedTeams"));
    this.targetPage = "/AddEditTeams";
    this.filterProperty = "name";
    this.filterByDescription =  this.filterByDescription.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.compare = this.compare.bind(this);
    
  }

  filterByName(){
    this.filterProperty = "name";
    this.teams.sort(this.compare);
      this.setState({
        teams: this.teams,
    });
  }

  filterByDescription(){
    this.filterProperty = "description";
    this.teams.sort(this.compare);
    this.setState({
      teams: this.teams,
    });
  }

   compare( a, b ) {
    if ( a[this.filterProperty] < b[this.filterProperty] ){
      return -1;
    }
    if ( a[this.filterProperty] > b[this.filterProperty] ){
      return 1;
    }
    return 0;
  }

  render(){
    const listItems = this.teams.map((d) => <div className="listLine" key={d.name}><div>{d.name}</div><div>{d.description}</div><ListButtons teamId={d.id}></ListButtons></div>);
    return (
      <div>
        <ComponentTitle title={"My Teams"} targetPage={this.targetPage}></ComponentTitle>
        <div className="listColumns">
        <div onClick={this.filterByName}>Name<div className="filterIcon"></div></div><div onClick={this.filterByDescription}>Description<div className="filterIcon"></div></div></div>
        {listItems}        
      </div>
    );
  }
}

export default MyTeams;