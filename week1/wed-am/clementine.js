const Clementine = {
  firstname: 'Clementine',
  lastname: 'Smart',
  entertainment: {
    videogames: [
      { rating: 1, name: 'Stardew Valley' },
      { rating: 2, name: 'Heave Ho' },
      { rating: 3, name: 'Tony Hawk' },
    ],
    tv: {
      current: 'Love Island',
    },
  },
  employment: {
    role: 'facilitator',
    hours: 40,
  },
};

// const lastname = Clementine.lastname;
// console.log(lastname);
// const videogame3 = Clementine.entertainment.videogames.name;
// console.log(videogame3);
// const currentTV = Clementine.entertainment.tv.current;
// console.log(currentTV);

const pruchases = ['12', '6', '4', 'hello', 'test'];

const newString = pruchases.reduce((acc, element) => `${acc}-${element}`);

console.log('string is: ', newString);
