module.exports = {
  name: 'Luke Skywalker',
  height: 72,
  mass: 7,
  birthYear: '19BBY',
  homeworld: {
    name: 'Tatooine',
    rotationPeriod: 23,
    orbitalPeriod: 304,
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    population: 200000
  },
  starships: [
    {
      name: 'X-wing',
      model: 'T-65 X-wing',
      manufacturer: 'Incom Corporation',
      costInCredits: 249999,
      specs: {
        length: 12.5,
        crew: 1,
        passengers: 0,
        hyperdriveRating: 1.0
      },
      starshipClass: 'Starfighter'
    },
    {
      name: 'Imperial shuttle',
      model: 'Lambda-class T-4a shuttle',
      manufacturer: 'Sienar Fleet Systems',
      costInCredits: 240000,
      specs: {
        length: 20,
        crew: 6,
        passengers: 20,
        hyperdriveRating: 2.0
      },
      starshipClass: 'Armed government transport'
    }
  ]
}
