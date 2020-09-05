import React from 'react';
import ComponentTitle from './ComponentTitle.jsx'
import ListButtons from './ListButtons.jsx'
class MyTeams extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teamsObject : [{name:"FT", description:"Fiver5 Team"}, {name:"TF", description:"Team Fantasy" }, {name:"Zerks", description:"All Zerks"}]
    }
    this.targetPage = "/AddEditTeams";
    this.teamObject = { name: "teamA"};
    this.teamsObject = [{name:"FT", description:"Fiver5 Team"}, {name:"TF", description:"Team Fantasy" }, {name:"Zerks", description:"All Zerks"}]
    this.filterProperty = "name";
    this.filterByDescription =  this.filterByDescription.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.compare = this.compare.bind(this);
    
  }

  filterByName(){
    this.filterProperty = "name";
    this.teamsObject.sort(this.compare);
      this.setState({
      teamsObject: this.teamsObject,
    });
  }

  filterByDescription(){
    this.filterProperty = "description";
    this.teamsObject.sort(this.compare);
    this.setState({
      teamsObject: this.teamsObject,
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
    const listItems = this.teamsObject.map((d) => <div key={d.name}><div>{d.name}</div><div>{d.description}</div><ListButtons name={d.name}></ListButtons></div>);
    return (
      <div>
        <ComponentTitle title={"My Teams"} targetPage={this.targetPage} targetData={this.teamObject}></ComponentTitle>
        <div onClick={this.filterByName}>Name</div><div onClick={this.filterByDescription}>Description</div>
        {listItems}        
      </div>
    );
  }
}

export default MyTeams;