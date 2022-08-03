const person = 'clementine';

// const fullname = 'clementine' + ' ' + 'smart';

function toFullname(firstname, lastname) {
  // return firstname + ' ' + lastname
  return `${firstname} ${lastname}`;
}

const toFullname2 = (firstname, lastname) => `${firstname} ${lastname}`;
const toFullname3 = (firstname, lastname) => {
  return `${firstname} ${lastname}`;
};

const fullname = toFullname('Ahmad', 'Anwar');
const fullname2 = toFullname2('Ahmad', 'Anwar');
const fullname3 = toFullname3('Ahmad', 'Anwar');

console.log(fullname);
console.log(fullname2);
console.log(fullname3);
console.log('Hello World');
