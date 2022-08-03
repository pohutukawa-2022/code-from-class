const pilot = require('./pilot');
const queries = require('./queries');

console.log('getHeight:', queries.getHeight(pilot));
console.log('getHomeworldClimate:', queries.getHomeworldClimate(pilot));
console.log('getStarshipNames:', queries.getStarshipNames(pilot));
console.log('getCustomStarship:', queries.getCustomStarship(pilot));
console.log('getTotalCostForAllShips:', queries.getTotalCostForAllShips(pilot));
// console.log(
//   'getFirstStarshipsHyperdriveRating:',
//   queries.getFirstStarshipsHyperdriveRating(pilot)
// );
// console.log('getShipNames:', queries.getShipNames(pilot))
// console.log('getCheapestShip:', queries.getCheapestShip(pilot))
// console.log('getValueOfAllShips:', queries.getValueOfAllShips(pilot, 5))
