const fs = require('fs').promises;
// const fs = require('fs/promises')
const path = require('path');

const files = [
  'kea.txt',
  'kiwi.txt',
  'manaia.txt',
  'nikau.txt',
  'pohutukawa.txt',
];

const filePaths = files.map((file) => path.join(__dirname, 'data', file));

function combine() {}
