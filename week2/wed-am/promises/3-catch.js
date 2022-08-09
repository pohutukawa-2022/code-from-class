const { getPlayerStats } = require('./utils');

getPlayerStats('richard').then((avg) => {
  console.log('average is ', avg);
});
