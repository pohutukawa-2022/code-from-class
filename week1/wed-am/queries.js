module.exports = {
  getHeight,
  getHomeworldClimate,
  getStarshipNames,
  getCustomStarship,
  getFirstStarshipsHyperdriveRating,
  getTotalCostForAllShips,
  getShipNames,
  getCheapestShip,
  getValueOfAllShips,
};

function getHeight(pilot) {
  return pilot.height;
}

function getHomeworldClimate(pilot) {
  return pilot.homeworld.climate;
}

function getStarshipNames(pilot) {
  return pilot.starships.map((starship) => starship.name);
}

function getCustomStarship(pilot) {
  return pilot.starships.map((starship) => {
    return { name: starship.name, staff: starship.specs.crew };
  });
}

function getTotalCostForAllShips(pilot) {
  const costInCreditsArray = pilot.starships.map(
    (starship) => starship.costInCredits
  );

  return costInCreditsArray.reduce((credits, cost) => credits + cost, 0);
}

function getFirstStarshipsHyperdriveRating(pilot) {}

// ---------------------------------------
// SOME EXAMPLES OF FUNCTIONS THAT USE ARRAY METHODS

function getShipNames(pilot) {
  // Return an array of ship names
  const names = pilot.starships.map((ship) => ship.name);
  return names;
}

function getCheapestShip(pilot) {
  function compare(s1, s2) {
    if (s1.costInCredits < s2.costInCredits) {
      return -1;
    }
    if (s1.costInCredits > s2.costInCredits) {
      return 1;
    }
    return 0;
  }
  return pilot.starships.sort(compare)[0];
}

function getValueOfAllShips(pilot, percentDepreciated) {
  // Return the value of all ships minus percentDepreciated
  const rate = 1 - percentDepreciated / 100;

  return pilot.starships.reduce((prev, curr) => {
    return prev + curr.costInCredits * rate;
  }, 0);
}
