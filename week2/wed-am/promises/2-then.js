const { averageTime, getPlayerStats } = require('./utils');

// print player stats
getPlayerStats('bro')
  .then((stats) => {
    console.log(stats);
    return averageTime(stats);
  })
  .then((avg) => {
    console.log(avg);
  })
  .catch((error) => {
    console.error(error);
  });
// print average scores
