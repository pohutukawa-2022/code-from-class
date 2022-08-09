/**
 * use `node 6-try-it-yourself.js`
 * Read the following examples and try to guess the output before you run it
 * Comment and uncomment to focus on one example
 * Be curious and experiment!
 */

const { averageTime, getPlayerStats, throwError } = require('./utils');

// A player that doesn't exist
// getPlayerStats('Palpatine')
//   .then((scores) => {
//     console.log('you will never see this message');
//     return averageTime(scores)
//   })
//   .then(avg => console.log('average is: ', avg))
//   .catch(error => {
//     console.error(error);
//   })

// throwError()
//   .then((scores) => {
//     console.log('you will never see me again');
//     return averageTime(scores)
//   })
//   .then(avg => console.log('average is: ', avg))
//   .catch(error => {
//     console.error('you should see this');
//   })

// getPlayerStats('eleanor')
//   .then((scores) => {
//     console.log('scores: ', scores);
//     return throwError()
//   })
//   .then(() => console.log('you will never see the average'))
//   .catch(error => {
//     console.error('you should see this');
//   })

// getPlayerStats('Kenobi')
//   .then((scores) => {
//     console.log('you should not see this');
//     return throwError()
//   })
//   .then(avg => console.log(`you should not see this too`))
//   .catch(error => {
//     console.error('you should see this');
//   })

// Promise.reject(Error(`I am an error, I don't play with .then`))
//   .then((scores) => {
//     console.log('scores: ', scores);
//     console.log('calculating average...');
//     return Promise.reject(`this error will never be printed`)
//   })
//   .then(avg => console.log('average is: ', avg))
//   .catch(error => {
//     console.error(error.message);
//   })

// Promise.resolve(1)
//   .then(num => 2)
//   .then(num => 3)
//   .then(num => console.log('the number is ', num))

// Promise.resolve(1)
//   .then(num => Promise.resolve(2))
//   .then(num => Promise.resolve(3))
//   .then(num => console.log('the number is ', num))

// Promise.resolve('I am a string and I resolve immediately')
//   .then(str => {
//     console.log(str);
//     return Promise.resolve(3)
//   })
//   .then(num => console.log('my fav number is ', num))
//   .then(() => console.log('the previous promise returned nothing'))
//   .then(() => ({ description: 'I am an object and the next .then will consume me' }))
//   .then(obj => {
//     console.log(obj);
//     return Promise.resolve({ ...obj, title: 'a new attribue with the spread operator' })
//   })
//   .then((obj) => console.log(obj))
//   .catch(() => console.log('you should NOT see this message'))
//   .finally(() => {
//     console.log('but you should see me here');
//   })

// // for the curious and the brave
// // this will be covered in a future lecture
// async function calculate() {
//   const stats = await getPlayerStats('jared')
//   const avg = await averageTime(stats)
//   console.log(avg)
// }

// calculate()
//   .then()
