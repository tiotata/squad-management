import React from 'react';
import ComponentTitle from './ComponentTitle.jsx'
class AppHeader extends React.Component {
  constructor(props) {
    super(props)

    this.savedTeams = JSON.parse(localStorage.getItem("savedTeams"));

    this.lowestvgList = [];
    this.getFiveLowestOrHighestAverageAgeTeam("lowest").map(function (item) {
      this.lowestvgList.push(<div className="rankLine"><span className="teamNameTop">{item.name}</span><span>{item.averageAge}</span></div>)
    }, this);

    this.highestAvgList = [];
    this.getFiveLowestOrHighestAverageAgeTeam("highest").map(function (item) {
      this.highestAvgList.push(<div className="rankLine"><span className="teamNameTop">{item.name}</span><span>{item.averageAge}</span></div>)
    }, this);

    
    this.mostPickedPlayer = this.getMostOrLessPickedPlayer("most").initials;

  }

  getTeamAverageAge(team) {
    let playersAgesSum = 0;
    team.squad.map(function (player) {
      playersAgesSum = playersAgesSum + parseInt(player.age)
    });
    return (playersAgesSum / team.squad.length);
  }

  getFiveLowestOrHighestAverageAgeTeam(str) {
    let me = this;
    this.savedTeams.map(function (team) {
      team.averageAge = me.getTeamAverageAge(team);
    });
    let orderedTeams;
    if(str=="highest") {
      orderedTeams = this.savedTeams.sort(this.compareReverse);
    } else if ( str == "lowest") {
      orderedTeams = this.savedTeams.sort(this.compare);
    }
    let resultArray = [];
    for (let i = 0; i < 5; i++) {
      if (orderedTeams[i] != undefined)
        resultArray.push(orderedTeams[i])
    }
    return resultArray;
  }

  compare(a, b) {
    let filterProperty = "averageAge";
    if (a[filterProperty] < b[filterProperty]) {
      return -1;
    }
    if (a[filterProperty] > b[filterProperty]) {
      return 1;
    }
    return 0;
  }

  compareReverse(a, b) {
    let filterProperty = "averageAge";
    if (a[filterProperty] < b[filterProperty]) {
      return 1;
    }
    if (a[filterProperty] > b[filterProperty]) {
      return -1;
    }
    return 0;
  }

  getMostOrLessPickedPlayer(str) {
    let allPlayersIds = [];
    let allPlayers = [];
    this.savedTeams.map(function (team) {
      team.squad.map(function (player) {
        allPlayersIds.push(player.id);
        allPlayers[player.id] = player;

      });
    });

    var map = {};
    var mostFrequentID = allPlayersIds[0];
    for (var i = 0; i < allPlayersIds.length; i++) {
      if (!map[allPlayersIds[i]]) {
        map[allPlayersIds[i]] = 1;
      } else {
        ++map[allPlayersIds[i]];
        if(str == "most") {
          if (map[allPlayersIds[i]] > map[mostFrequentID]) {
            mostFrequentID = allPlayersIds[i];
          }
        } else if (str == "less"){
          if (map[allPlayersIds[i]] < map[mostFrequentID]) {
            mostFrequentID = allPlayersIds[i];
          }
        }
      }
    }
    debugger;
    return allPlayers[mostFrequentID];
  }

  getLessPickedPlayer() {

  }

  render() {
    return (
      <div>
        <ComponentTitle title={"Top 5"} ></ComponentTitle>
        <div className="topFiveRank">
          <div className="rankColumn">
            {this.highestAvgList}
          </div>
          <div className="rankColumn">
            {this.lowestvgList}
          </div>
        </div>
          player PICKED {this.mostPickedPlayer}
      </div>
    );
  }
}

export default AppHeader;