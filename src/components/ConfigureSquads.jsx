import React from 'react';
import ComponentSubTitle from './ComponentSubTitle';


class AppHeader extends React.Component {

  state = {
    soccerFormationDiv: [],
    squadConfig: []
  }
  constructor(props) {
    super(props);

    if (props.formation) {
      this.formation = props.formation;
    }
    else {
      this.formation = [3, 4, 2] //default formation
    }
    this.soccerFormationDiv = [];
    this.formationOptions = [[3, 2, 2, 3], [3, 2, 3, 1], [3, 4, 3], [3, 5, 2], [4, 2, 3, 1], [4, 3, 1, 1], [4, 3, 2], [4, 4, 2], [4, 5, 1], [5, 4, 1]];
    this.slotKey = 0;
    this.playerListContainers = [];
    this.squadConfig = []
    this.slotIds = []; // gonna save slot Ids for empty them when need.
    if (props.squad) {
      this.squadConfig = props.squad;
    }

    this.state = {
      playerListContainers: [],
      playersSearch: []
    }
  }

  componentDidMount() {
    this.placeSlots();
    this.populateSquadSlots();

  }

  placeSlots() {
    this.emptySlots();
    this.soccerFormationDiv = [];
    this.slotKey = 0;
    this.squadConfig = [];
    let soccerFormationLines = [];
    //first we read the array containing the formation numbers
    this.formation.map(function (num) {
      let line = [];
      for (let i = 1; i <= num; i++) {
        //and we add as many players we will have horizontally in each line.
        line.push(<div key={"player" + this.slotKey} id={"player" + this.slotKey} onDrop={event => this.drop(event)} onDragOver={event => this.allowDrop(event)} className="playerName"><span>+</span></div>);
        this.slotIds.push("player" + this.slotKey);
        this.slotKey++;
      }
      line.key = "line" + num;
      soccerFormationLines.push(line);
    }, this);

    for (let i = soccerFormationLines.length - 1; i > -1; i--) {
      //then we add all lines into the soccerFormation Container (with SASS we eWill handle all the positioning!)
      this.soccerFormationDiv.push(<div key={"formationLine" + i} className="formationLine">{soccerFormationLines[i]}</div>)
    }

    //finally, we add the goal Keeper!
    this.soccerFormationDiv.push(<div key={soccerFormationLines.length} className="formationLine"><div id={"player" + this.slotKey} onDrop={event => this.drop(event)} onDragOver={event => this.allowDrop(event)} className="playerName"><span draggable="false">+</span></div></div>)
    this.slotIds.push("player" + this.slotKey);

    this.setState(() => ({
      soccerFormationDiv: this.soccerFormationDiv
    }))
  }

  emptySlots(){
    this.slotIds.map( function (id) {
      document.getElementById(id).innerHTML = "<span>+</span>";
    })
  }

  drop(ev) {
    ev.preventDefault();
    let target = ev.target;
    if (target.tagName === "SPAN") {
      target = target.parentElement;
    }
    let player = this.getPlayerFromSearchList(ev.dataTransfer.getData("playerId"));
    player.initials = this.getPlayerInitials(player);;
    player.slot = target.id;
    this.squadConfig.push(player);
    document.getElementById(target.id.toString()).innerHTML = player.initials;
    this.playersSearch.splice(this.playersSearch.indexOf(player), 1);
    this.populateSearchList();

  }

  getPlayerInitials(player) {
    let firstNameChar = player.firstname.charAt(0).toUpperCase();;
    let lastNameChar = player.lastname.charAt(0).toUpperCase();;
    return firstNameChar + lastNameChar;
  }

  getSquadConfig() {
    return this.squadConfig;
  }

  populateSearchList() {
    this.playerListContainers = [];
    let players = this.playersSearch;
    for (let i = 0; i < players.length; i++) {
      let player = players[i];
      this.playerListContainers.push(<div className="playerItem" id={player.id} key={player.id} draggable="true" onDragStart={event => this.drag(event)}>
        <div>
          <span className="searchLabel">Name: </span>
          <span>{player.firstname + " " + player.lastname}</span>
          <span className="searchLabel">Nationality: </span>
          <span>{player.nationality}</span>
        </div>
        <div>
          <span className="searchLabel">Age: </span>
          <span>{player.age}</span>
        </div>
      </div>);
    }
    this.setState({
      playerListContainers: this.playerListContainers,
    });
  }

  populateSquadSlots() {
    let slot;
    let player;
    for (let i = 0; i < this.squadConfig.length; i++) {
      player = this.squadConfig[i]
      slot = document.getElementById(player.slot)
      slot.innerHTML = player.initials;
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("playerId", ev.target.id);
  }

  getPlayerFromSearchList(playerId) {
    return this.playersSearch.find(x => x.id === parseInt(playerId));
  }

  getPlayerFromSquadList(playerId) {
    return this.squadConfig.find(x => x.id === parseInt(playerId));
  }
  searchPlayer(str) {
    if (str.length > 3) {
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      let targetUrl = 'https://www.api-football.com/demo/v2/players/search/' + str;
      fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then((data) => {
          this.playersSearch = [];
          console.log(data);
          for (let i = 0; i < data.api.results; i++) {
            if (this.getPlayerFromSearchList(data.api.players[i].player_id) || this.getPlayerFromSquadList(data.api.players[i].player_id))
              continue;
            this.playersSearch.push({
              id: data.api.players[i].player_id,
              firstname: data.api.players[i].firstname,
              lastname: data.api.players[i].lastname,
              nationality: data.api.players[i].nationality,
              age: data.api.players[i].age
            })
          }
          this.populateSearchList()
        })
        .catch(console.log)
    }
  }

  validate() {
    return true;
  }

  render() {
    const listOptions = [];
    for (let i = 0; i < this.formationOptions.length; i++) {
      if (this.formationOptions[i].toString() == this.formation.toString()) {
        listOptions.push(<option value={this.formationOptions[i]} selected > {this.formationOptions[i].toString().replaceAll(",", "-")} </option>);
      } else {
        listOptions.push(<option value={this.formationOptions[i]} > {this.formationOptions[i]} </option>);
      }
    }
    return (
      <>
        <ComponentSubTitle title={"Configure Squad"}></ComponentSubTitle>
        <div className="dragDropArea">
          <div>
            <span>Formation</span>
            <select onChange={event => { this.formation = JSON.parse("[" + event.target.value + "]"); this.quadConfig = []; this.placeSlots() }} id="formations" name="formations">
              {listOptions}
            </select>
            <div className="soccerField">
              {this.state.soccerFormationDiv}
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