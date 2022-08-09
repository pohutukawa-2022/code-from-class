const players = require('./data/players');

function averageTime(arr) {
  // check if the array IS defined and it contains one or more elements
  if (arr && arr.length > 0) {
    const sum = arr.reduce((acc, current) => acc + current);
    const count = arr.length;
    const avg = sum / count;
    return Promise.resolve(avg);
  }
  const errorMessage = `are you kidding me? you cant divide by zero`;
  return Promise.reject(errorMessage);
}

function getPlayerStats(nameToFind) {
  const player = players.find((player) => player.name === nameToFind);
  if (player) {
    // ternary operator
    return player.scores.length > 0
      ? Promise.resolve(player.scores)
      : Promise.reject('this player has no games to score');

    // if(player.scores.length > 0) {
    //   return Promise.resolve(player.scores)
    // } else {
    //   return Promise.reject('this player has no games to score')
    // }
  }
  return Promise.reject('player does not exist');
}

function throwError() {
  return Promise.reject(Error('ops, something went wrong'));
}

module.exports = {
  averageTime,
  getPlayerStats,
  throwError,
};
