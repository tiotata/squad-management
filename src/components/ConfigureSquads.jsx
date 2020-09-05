import React from 'react';
import ComponentSubTitle from './ComponentSubTitle';


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.formation = props.formation;
    this.soccerFormationLines = [];
    this.slotKey = 0;
    this.playerListContainers = [];
    this.state = {
      playerListContainers: []
    }

    //first we read the array containing the formation numbers
    this.formation.map(function (num) {
      let line = [];
      for (let i = 1; i <= num; i++) {
        //and we add as many players we will have horizontally in each line.
        line.push(<div key={"player" + this.slotKey} className="playerName"><span>+</span></div>);
        this.slotKey++;
      }
      line.key = "line" + num;
      this.soccerFormationLines.push(line);
    }, this);

    this.soccerFormationDiv = [];
    for (let i = this.soccerFormationLines.length - 1; i > -1; i--) {
      //then we add all lines into the soccerFormation Container (with SASS we eWill handle all the positioning!)
      this.soccerFormationDiv.push(<div key={"formationLine" + i} className="formationLine">{this.soccerFormationLines[i]}</div>)
    }

    //finally, we add the goal Keeper!
    this.soccerFormationDiv.push(<div key={this.soccerFormationLines.length} className="formationLine"><div id={this.key} className="playerName"><span>+</span></div></div>)

  }

  drag(target) {
    console.log(target);

  }

  searchPlayer(str) {
    if (str.length > 3) {
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      let targetUrl = 'https://www.api-football.com/demo/v2/players/search/ronaldo'
      fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then((data) => {
          this.playerListContainers = [];
          let players = [];
          console.log(data);
          for (let i = 0; i < data.api.results; i++) {
            players.push({
              id: data.api.players[i].player_id,
              firstname: data.api.players[i].fisrtname,
              lastname: data.api.players[i].lastname,
              nationality: data.api.players[i].nationality,
              age: data.api.players[i].age
            })
            this.playerListContainers.push(<div className="playerItem" key={data.api.players[i].player_id} draggable="true" onDragStart={event => this.drag(event.target)}>
              <div>
                <span className="searchLabel">Name: </span>
                <span>{data.api.players[i].firstname + " " + data.api.players[i].lastname}</span>
                <span className="searchLabel">Nationality: </span>
                <span>{data.api.players[i].nationality}</span>
              </div>
              <div>
                <span className="searchLabel">Age: </span>
                <span>{data.api.players[i].age}</span>
              </div>
            </div>);
          }
          this.setState({
            playerListContainers: this.playerListContainers,
          });
        })
        .catch(console.log)
    }
  }

  validate() {
    return true;
  }

  render() {
    return (
      <>
        <ComponentSubTitle title={"Configure Squad"}></ComponentSubTitle>
        <div className="dragDropArea">
          <div>
            <span>Formation</span>
            <input type="text" placeholder={this.formation}></input>
            <div className="soccerField">
              {this.soccerFormationDiv}
            </div>
          </div>
          <div>
            <span>Search Players</span>
            <input type="text" onChange={event => this.searchPlayer(event.target.value)} ></input>
            <div className="availablePlayers">
              {this.playerListContainers}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppHeader;